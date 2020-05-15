# FROM node:12.16.1-alpine As builder
# WORKDIR /usr/src/app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build --prod
# FROM nginx:1.15.8-alpine
# EXPOSE 80
# COPY --from=builder /usr/src/app/dist/mean-stack-crud-app/ /usr/share/nginx/html

#stage 1
FROM node:12.16.1-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:1.18.0-alpine
COPY --from=node /app/dist/mean-stack-crud-app /usr/share/nginx/html
