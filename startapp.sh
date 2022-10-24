#bin/bash!

docker build -t scripbox .
docker run -it -p 3000:3000 scripbox:latest