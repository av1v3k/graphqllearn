FROM node:14.20.0-alpine
LABEL desc="docker image of for learning GraphQL(node-server) - Udemy Stephen Grider"
WORKDIR /graphql

COPY ./nodeserver/package.json /graphql
COPY ./nodeserver/ /graphql

RUN npm i -g nodemon axios

COPY ./nodeserver/server.js /graphql

RUN npm i
EXPOSE 3500

CMD npm run start:server