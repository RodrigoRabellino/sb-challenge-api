FROM node:16.15-alpine3.15
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "/app/app.js"]