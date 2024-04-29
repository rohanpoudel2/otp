FROM node:20.9.0-bookworm

WORKDIR /app

COPY package*.json ./

RUN npm config set registry https://registry.npmjs.org/

RUN npm install

COPY . .

EXPOSE 8081

CMD [ "npm", "run", "preview" ]