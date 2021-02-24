FROM php:7.4-fpm-alpine

WORKDIR /var/www/html

RUN apk update \
    && apk add bash 

RUN docker-php-ext-install pdo pdo_mysql

RUN chown -R www-data:www-data /var/www