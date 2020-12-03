FROM node:slim

WORKDIR /usr/app

COPY package*.json ./

RUN yarn install
RUN yarn add ts-node-dev --dev

COPY . .

EXPOSE 3333

# CMD ["yarn", "start"]
