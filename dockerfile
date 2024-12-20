FROM node:18-alpine AS build
WORKDIR /app
COPY prusciplus-app/package*.json ./
RUN npm install
COPY prusciplus-app/ .
RUN npm run build


FROM nginx:alpine
COPY --from=build /app/dist/prusciplus-app /usr/share/nginx/html
ENV PRODUCTION_ENV=production
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]





