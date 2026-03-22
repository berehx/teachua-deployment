package com.softserve.teachua.security;

import com.softserve.teachua.converter.DtoConverter;
import com.softserve.teachua.dto.security.UserEntity;
import com.softserve.teachua.repository.UserRepository;
import com.softserve.teachua.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

@Component
public class CustomUserDetailsService implements UserDetailsService {

    //private UserService userService;
    private UserRepository userRepository;
    private DtoConverter dtoConverter;

//    @Autowired
//    public CustomUserDetailsService(UserService userService) {
//        this.userService = userService;
//    }

    @Autowired
    public CustomUserDetailsService(UserRepository userRepository, DtoConverter dtoConverter) {
        this.userRepository = userRepository;
        this.dtoConverter = dtoConverter;
    }

    @Override
    public CustomUserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        //UserEntity userEntity = userService.getUserEntity(email);
        UserEntity userEntity = dtoConverter.convertToDto(userRepository.findByEmail(email).get(), UserEntity.class);
        return CustomUserDetails.fromUserEntityToCustomUserDetails(userEntity);
    }

    public String getExpirationLocalDate() {
        CustomUserDetails customUserDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        LocalDateTime localDate = customUserDetails.getExpirationDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy 'at' hh:mm");
        return localDate.format(formatter);
    }
}
