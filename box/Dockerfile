FROM debian:jessie

MAINTAINER Nabil Boucherifi <bouche_n@etna-alternance.net>

RUN apt-get update \
    && apt-get install -y \
        nodejs \
	npm \
	git

RUN cd /home

RUN git clone https://github.com/goazgoaz/SpinalBox.git /home

RUN chmod 744 /home/spinalcore/Docker/script/service_start.sh

ENTRYPOINT /home/spinalcore/Docker/script/service_start.sh

RUN ls /home/spinalcore/handy-project/organs/light

WORKDIR /