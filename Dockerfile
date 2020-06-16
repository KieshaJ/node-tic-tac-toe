FROM node:12

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY . /usr/src/app

RUN npm install
RUN npm run build

EXPOSE 4000
CMD node dist