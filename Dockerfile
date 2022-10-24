# Dockerfile
FROM node:16-alpine

# create destination directory
RUN mkdir -p /nuxt-app
WORKDIR /nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /nuxt-app
RUN npm install
RUN npm run generate

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]