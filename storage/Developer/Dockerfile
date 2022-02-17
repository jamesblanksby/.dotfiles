FROM php:7.1-apache

RUN apt-get update && \
	apt-get install -y \
		libfreetype6-dev \
		libjpeg62-turbo-dev \
		libpng-dev \
		libmcrypt-dev

RUN docker-php-ext-configure \
	gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/

RUN docker-php-ext-install \
	mysqli \
	gd \
	zip

RUN a2enmod \
	rewrite

RUN cd /usr/local/etc/php && touch php.ini

RUN echo "output_buffering=4096" > /usr/local/etc/php/php.ini
RUN echo "memory_limit=512M" > /usr/local/etc/php/conf.d/memory-limit.ini
