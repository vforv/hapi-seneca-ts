#!/bin/bash

cd ..
for d in `ls` ; do
    
    if ! [ $d == 'system' ] && ! [ $d == 'npm-debug.log' ] && ! [ $d == 'README.md' ] && ! [ $d == 'monitor' ] && ! [ $d == 'dist' ] && ! [ $d == 'bases-service' ] && ! [ $d == 'repl' ]; then
        cd $d
        npm test
        echo "$d tested..."
        cd ..
    fi
    
done