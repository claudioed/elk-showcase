FROM node:4.2.1
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

MAINTAINER Claudio Eduardo de Oliveira

# Set workdir
WORKDIR /crm-app
ADD . /crm-app

# Logstash in sources list
RUN echo 'deb http://packages.elastic.co/logstashforwarder/debian stable main' | tee /etc/apt/sources.list.d/logstashforwarder.list

# Download and install Logstash Forwarder
RUN wget -qO - https://packages.elastic.co/GPG-KEY-elasticsearch | apt-key add - \
    && apt-get update \
    && apt-get install logstash-forwarder

# Expose port 3000
EXPOSE 3000

# Create Logs folder
RUN mkdir /var/logs

# Install node dependencies
RUN npm install