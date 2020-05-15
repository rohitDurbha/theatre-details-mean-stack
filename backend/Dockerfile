FROM node:12.16.1-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
# RUN npm cache clean --force 
RUN npm cache verify
#for npm > 5 use npm cache verify
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
CMD ["npm","start"]