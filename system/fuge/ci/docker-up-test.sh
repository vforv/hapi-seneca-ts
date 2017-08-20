#!/usr/bin/env bash

set -o errexit

cd $(dirname $0)
cd ../

mkdir -p $HOME/.cache/yarn
mkdir -p $HOME/.nuget

docker-compose -f docker-compose-test.yml -p dev-test up -d --build
docker-compose -f docker-compose-test.yml -p dev-test logs -f &
exit 0