FROM php:8.2.12-apache

# install dependencies
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    libonig-dev \
    libxml2-dev \
    curl \
    git \
    libpq-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && docker-php-ext-configure zip \
    && docker-php-ext-install pdo pdo_mysql zip mbstring exif pcntl bcmath gd

# Enable mod_rewrite
RUN a2enmod rewrite

# Install Php Extensions
RUN docker-php-ext-install pdo_mysql zip

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Copy Application Code
COPY . /var/www/html

# Set The Working Directory
WORKDIR /var/www/html

# install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# install this project dependencies
RUN composer install

# Install Node.js (18 LTS) for Vite
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Confirm it's installed (optional debug)
RUN node -v && npm -v

# Install JS dependencies and build frontend using Vite
RUN npm install && npm run build

# set permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
