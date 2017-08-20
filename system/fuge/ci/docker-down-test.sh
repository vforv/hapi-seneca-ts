#!/usr/bin/env bash

set -o errexit

cd $(dirname $0)
cd ../

docker-compose -p dev-test down
docker-compose image down
exit 0
