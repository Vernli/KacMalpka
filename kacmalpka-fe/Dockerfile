FROM node:20-alpine

WORKDIR /react

COPY package.json ./

ENV PATH /react/node_modules/.bin:$PATH

RUN npm install

COPY . /react

RUN npm run build

CMD ["npm", "start"]
