FROM nginx:alpine
MAINTAINER Kevin Dantas "kevinds29@gmail.com"

ADD build /usr/share/nginx/html

EXPOSE 80