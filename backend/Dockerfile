from node:16.0.0-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package*.json ./

RUN npm install -g pnpm@7.6.0
RUN pnpm install

COPY . .

EXPOSE 8181

CMD [ "pnpm", "start:dev" ]