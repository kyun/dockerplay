FROM node:16-alpine
WORKDIR /
COPY package*.json ./
RUN npm install --slient
COPY . .
RUN echo "Hello World"
CMD ["npm", "start"]
EXPOSE 4000