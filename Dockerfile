# using nodejs image
FROM node:16-alpine

WORKDIR ./app

COPY package*.json .

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 8085

CMD ["npm", "start"]