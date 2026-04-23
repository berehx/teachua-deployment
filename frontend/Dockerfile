FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG REACT_APP_ROOT_SERVER
ENV REACT_APP_ROOT_SERVER=$REACT_APP_ROOT_SERVER
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
