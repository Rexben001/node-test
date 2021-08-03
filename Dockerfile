FROM node:14.0-alpine3.11

WORKDIR /usr/app

WORKDIR /app

RUN apk add --no-cache python g++ make

RUN mkdir -p /app
 #/usr/src/app
COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 4100

ENTRYPOINT ["node"]

CMD ["./src/index.js"]