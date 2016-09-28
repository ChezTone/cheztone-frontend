FROM debian:jessie
#install tools
RUN apt-get update && apt-get install -y \
    apache2 \
  && rm -rf /var/lib/apt/lists/*
#get sources
COPY ./dist/* /var/temp/html/

EXPOSE 80

# Launch Apache2
ENTRYPOINT ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
