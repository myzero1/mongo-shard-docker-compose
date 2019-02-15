#!/bin/bash

# add-shard
docker-compose exec shard03a sh -c "mongo --port 27020 < /scripts/init-shard03.js"

docker-compose exec router01 sh -c "mongo --port 27017 < /scripts/add-shard.js"
docker-compose exec router02 sh -c "mongo --port 27018 < /scripts/add-shard.js"

# del-shard
#docker-compose exec router01 sh -c "mongo --port 27017 < /scripts/del-shard.js"
#docker-compose exec router02 sh -c "mongo --port 27018 < /scripts/del-shard.js"