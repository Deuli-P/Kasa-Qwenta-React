# ----- Build -----
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json
RUN npm ci

COPY ..

RUN npm run build

# ----- Serve -----
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80