FROM node:14.15.0-alpine
LABEL desc="docker image of for learning GraphQL - Udemy Stephen Grider"
WORKDIR /db
RUN npm i -g json-server
COPY package.json /db
COPY db.json /db
RUN npm i
EXPOSE 3000
#CMD ["npm", "start:jsonserver"]
CMD npm run start:jsonserver