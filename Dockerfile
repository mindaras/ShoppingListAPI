FROM node:12

WORKDIR /usr/app

COPY package.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8000

CMD ["yarn", "start:prod"]
