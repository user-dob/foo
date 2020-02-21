FROM node:alpine As development

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine as production

WORKDIR /usr/src

COPY --from=development /usr/src/dist ./dist

CMD ["node", "dist/main"]