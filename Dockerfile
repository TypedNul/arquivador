FROM php7.4-cli
WORKDIR app
COPY . app
CMD [php, -S, 0.0.0.08080, -t, public]
