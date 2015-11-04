FROM tutum/nginx

# Logstash in sources list
RUN echo 'deb http://packages.elastic.co/logstashforwarder/debian stable main' | tee /etc/apt/sources.list.d/logstashforwarder.list

# Install
RUN  apt-get update \
  && apt-get install -y wget \
  && rm -rf /var/lib/apt/lists/*

# Download and install Logstash Forwarder
RUN wget -qO - https://packages.elastic.co/GPG-KEY-elasticsearch | apt-key add - \
    && apt-get update \
    && apt-get install logstash-forwarder

# Erase default files
RUN rm /etc/nginx/sites-enabled/default

# Config new hosts
ADD sites-enabled/ /etc/nginx/sites-enabled
