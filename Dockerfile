FROM php:8.2-fpm

# Installer les extensions PHP nécessaires
RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip curl \
    && docker-php-ext-install pdo_mysql zip

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Copier le projet Laravel
WORKDIR /var/www/html
COPY . /var/www/html

# Installer les dépendances PHP
RUN composer install

# Configurer les permissions
RUN chmod -R 775 storage bootstrap/cache

# Exposer le port pour le serveur PHP intégré
EXPOSE 8000

CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]
