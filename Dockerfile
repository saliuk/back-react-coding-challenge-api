FROM node:12.16.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8085

CMD [ "node", "app.js" ]
