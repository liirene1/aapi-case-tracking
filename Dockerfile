FROM node:14
WORKDIR /usr/src/app

COPY package*.json yarn.lock ./
RUN yarn install
# RUN npm ci --only=production

COPY . .
RUN yarn build

EXPOSE 3000
CMD [ "node", "server.js" ]
