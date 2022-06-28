FROM node:alpine
COPY package.json .
COPY . .
RUN npm install
EXPOSE 3333
CMD ["node" , "index.js"]