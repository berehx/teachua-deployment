terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
}

provider "azurerm" {
  features {}
}

data "azurerm_client_config" "current" {}

resource "random_id" "kvname" {
  byte_length = 4
}

resource "azurerm_resource_group" "teachua_rg" {
  name     = "teachua-poland-rg"
  location = "polandcentral"
}

resource "azurerm_virtual_network" "teachua_vnet" {
  name                = "teachua-network"
  address_space       = ["10.0.0.0/16"]
  location            = azurerm_resource_group.teachua_rg.location
  resource_group_name = azurerm_resource_group.teachua_rg.name
}

resource "azurerm_subnet" "teachua_subnet" {
  name                 = "internal"
  resource_group_name  = azurerm_resource_group.teachua_rg.name
  virtual_network_name = azurerm_virtual_network.teachua_vnet.name
  address_prefixes     = ["10.0.1.0/24"]
}

resource "azurerm_public_ip" "teachua_ip" {
  name                = "teachua-public-ip"
  location            = azurerm_resource_group.teachua_rg.location
  resource_group_name = azurerm_resource_group.teachua_rg.name
  allocation_method   = "Static"
  sku                 = "Standard"
}

resource "azurerm_network_security_group" "teachua_nsg" {
  name                = "teachua-nsg"
  location            = azurerm_resource_group.teachua_rg.location
  resource_group_name = azurerm_resource_group.teachua_rg.name

  security_rule {
    name                       = "SSH"
    priority                   = 1001
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "22"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

  security_rule {
    name                       = "HTTP"
    priority                   = 1002
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "80"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }
}

resource "azurerm_network_interface" "teachua_nic" {
  name                = "teachua-nic"
  location            = azurerm_resource_group.teachua_rg.location
  resource_group_name = azurerm_resource_group.teachua_rg.name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.teachua_subnet.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.teachua_ip.id
  }
}

resource "azurerm_network_interface_security_group_association" "teachua_nsg_assoc" {
  network_interface_id      = azurerm_network_interface.teachua_nic.id
  network_security_group_id = azurerm_network_security_group.teachua_nsg.id
}

resource "azurerm_key_vault" "teachua_kv" {
  name                        = "teachua-kv-${lower(random_id.kvname.hex)}"
  location                    = azurerm_resource_group.teachua_rg.location
  resource_group_name         = azurerm_resource_group.teachua_rg.name
  enabled_for_disk_encryption = true
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  soft_delete_retention_days  = 7
  purge_protection_enabled    = false
  sku_name                    = "standard"

  access_policy {
    tenant_id = data.azurerm_client_config.current.tenant_id
    object_id = data.azurerm_client_config.current.object_id
    secret_permissions = ["Get", "List", "Set", "Delete", "Purge", "Recover"]
  }
}

resource "azurerm_linux_virtual_machine" "teachua_vm" {
  name                = "teachua-vm"
  resource_group_name = azurerm_resource_group.teachua_rg.name
  location            = azurerm_resource_group.teachua_rg.location
  size                = "Standard_D2s_v3"
  admin_username      = "azureuser"
  network_interface_ids = [
    azurerm_network_interface.teachua_nic.id,
  ]

  identity {
    type = "SystemAssigned"
  }

  admin_ssh_key {
    username   = "azureuser"
    public_key = file("~/.ssh/id_rsa.pub")
  }

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts"
    version   = "latest"
  }
}

output "public_ip" {
  value = azurerm_public_ip.teachua_ip.ip_address
}

resource "azurerm_key_vault_access_policy" "vm_policy" {
  key_vault_id = azurerm_key_vault.teachua_kv.id
  tenant_id    = data.azurerm_client_config.current.tenant_id
  object_id    = azurerm_linux_virtual_machine.teachua_vm.identity[0].principal_id
  secret_permissions = ["Get", "List"]
}

resource "azurerm_key_vault_secret" "db_password" {
  name         = "DB-PASSWORD"
  value        = var.db_password
  key_vault_id = azurerm_key_vault.teachua_kv.id
}

variable "db_password" {
  description = "Administrator password for the database"
  type        = string
  sensitive   = true
}
