FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
