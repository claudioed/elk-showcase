FROM node:4.2.1
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

MAINTAINER Claudio Eduardo de Oliveira

# Set workdir
WORKDIR /crm-app
ADD . /crm-app

EXPOSE 3000

# Install node dependencies
RUN npm install