cd ..
for d in `ls` ; do
    cd $d
    npm i
    echo "$d deps installed..."
    cd ..
done