FROM nginx:latest
LABEL maintainer="Kyun"

COPY ./index.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]