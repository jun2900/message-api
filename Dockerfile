# syntax=docker/dockerfile:1

FROM node:12.18.1

# Create working directory
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD ["node", "server.js"]
