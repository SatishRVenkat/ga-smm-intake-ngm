FROM node:22.5.1-alpine as build
WORKDIR /app
COPY package*.json ./ 
RUN npm install
RUN npx ngcc --properties es2022 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build
FROM nginx:stable
COPY --from=build /app/dist/client /usr/share/nginx/html
EXPOSE 80
