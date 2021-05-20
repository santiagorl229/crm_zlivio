#!/bin/bash
set -e

SERVER="crmzlivio";
PW="postgres";
DB="crmzlivio";

echo "echo stop & remove old docker [$SERVER] and starting new fresh instance of [$SERVER]"
(sudo docker stop $SERVER || :) && (sudo docker kill --signal=SIGINT $SERVER || :) && \
  (sudo docker rm -f  $SERVER || :) && \
  sudo docker run --name $SERVER -e POSTGRES_PASSWORD=$PW \
  -e PGPASSWORD=$PW \
  -p 5432:5432 \
  -d postgres

# wait for pg to start
echo "sleep wait for pg-server [$SERVER] to start";
sleep 3;

# create the db 
echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | sudo docker exec -i $SERVER psql -U postgres
echo "\l" | sudo docker exec -i $SERVER psql -U postgres