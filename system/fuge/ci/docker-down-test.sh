#!/usr/bin/env bash
cd $(dirname $0)
cd ../

docker-compose -p dev-test down
docker-compose -p image down
exit 0