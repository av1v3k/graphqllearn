FROM node:14.15.0-alpine
LABEL desc="docker image of for learning GraphQL(json-server) - Udemy Stephen Grider"
WORKDIR /db

COPY ./jsonserver/package.json ./db
COPY ./jsonserver/db.json ./db

RUN npm i
EXPOSE 3000

CMD npm run start:jsonserver