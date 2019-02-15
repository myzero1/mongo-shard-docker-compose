use admin

sh.addShard("shard01/shard01a:27018")
sh.addShard("shard01/shard01b:27018")

sh.addShard("shard02/shard02a:27019")
sh.addShard("shard02/shard02b:27019")

db.runCommand({ enablesharding:"test" })
db.runCommand({ shardcollection:"test.users", key:{ _id:1 } })

use config
db.settings.save( { _id:"chunksize", value: 1 } )

use test
for (var i = 1; i < 22222; i++) {
	db.users.insert( { id:i+"_"+Math.random().toString(12).substr(2),name:Math.random().toString(36).substr(2) } );
}