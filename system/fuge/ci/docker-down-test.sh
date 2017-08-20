#!/usr/bin/env bash

set -o errexit

cd $(dirname $0)
cd ../

docker-compose -f docker-compose-test.yml -p dev-test down
docker-compose -f docker-compose-test.yml image down
exit 0