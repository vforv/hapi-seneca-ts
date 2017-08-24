FROM mhart/alpine-node:6.9.4

RUN apk add --no-cache make gcc g++ python git iputils drill net-tools bash

# Create app directory
RUN mkdir -p /home/app
RUN mkdir -p /home/app/test
RUN mkdir -p /home/app/repl
WORKDIR /home/app


# Install app dependencies

COPY package.json /home/app/repl
RUN cd repl && npm install;


# Bundle app source
COPY . /home/app/repl


EXPOSE 10001

CMD cd repl ; npm start