use admin
db.runCommand({ removeshard:"shard03a:27020" })
printShardingStatus()