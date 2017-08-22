#!/usr/bin/env bash

set -o errexit

cd $(dirname $0)
cd ../

docker-compose -p dev-test down
docker-compose -p image down
exit 0
