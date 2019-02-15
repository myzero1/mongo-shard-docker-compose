use admin
db.runCommand({ addshard:"shard03a:27020" })
printShardingStatus()