#!/bin/bash

cd ..
for d in `ls` ; do
    
    if ! [ $d == 'system' ] && ! [ $d == 'npm-debug.log' ] && ! [ $d == 'dist' ]; then
        cd $d
        tsc
        echo "$d built..."
        cd ..
    fi
    
done