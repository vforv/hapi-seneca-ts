#!/usr/bin/env bash


cd $(dirname $0)
cd ../

mkdir -p $HOME/.cache/yarn
mkdir -p $HOME/.nuget

docker-compose -f docker-compose.yml -p dev up -d --build
docker-compose -f docker-compose.yml -p dev logs -f &
pid=$!

for i in `seq 1 600`; do
	# wait for containers to come up
	sleep 1
	# get a response from backend and frontend
	curl localhost:5000 >/dev/null 2>&1 && curl localhost:5000 >/dev/null 2>&1
	# exit if successful
	if [ $? -eq 0 ]; then
		kill $pid
		wait $pid
		echo "Docker container started"
		exit 0
	fi
done

# init script did not run
kill $pid
wait $pid
>&2 echo "Docker container did not start"
exit 1