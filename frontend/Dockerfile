FROM node:16.20.2-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
EXPOSE 3000
CMD ["npm", "start"]
