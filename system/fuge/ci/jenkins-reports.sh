#!/usr/bin/env bash

mkdir -p test
rm -rf test/*
docker cp devtest_api_1:home/app/test/api.xml test/api.xml
exit 0