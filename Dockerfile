FROM node:14.15.0-alpine
LABEL desc="docker image of for learning GraphQL - Udemy Stephen Grider"
WORKDIR /graphql
RUN npm i -g nodemon
COPY package.json /graphql
COPY server.js /graphql
RUN npm i
EXPOSE 3500
CMD ["npm", "start"]