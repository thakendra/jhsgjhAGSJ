//Database connection. well you will need it
var mongoose = require('mongoose')
    //var uniqueValidator = require('mongoose-unique-validator')
var globalUri = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST1},${process.env.DATABASE_HOST2},${process.env.DATABASE_HOST3}/${process.env.DATABASE_NAME}?replicaSet=${process.env.REPLICA_NAME}&authSource=admin`
var localUri = `mongodb://${process.env.DATABASE_HOST_LOCAL}/${process.env.DATABASE_HOST_LOCAL_NAME}`

console.log(globalUri)
var mongodbUri = globalUri
    //No need of debugging in production mode
    //later i will make it from environment variable
mongoose.set('debug', true)
mongoose.connection.openUri(mongodbUri, {
    useNewUrlParser: true,
    readPreference: "nearest",
    useUnifiedTopology: true
})

mongoose.set('useCreateIndex', true)

var conn = mongoose.connection
conn.on('error', function(data) {
    console.log(data)
    console.log('connection error: Unable to connect to MongoDB')
})
conn.on('connected', function() {

    //const collection = conn.collection('vehicles')

    console.log('connected: MongoDB Connected')
})
conn.on('disconnected', function() {
    console.log('disconnected: MongoDB disconnected')
})



// function pollStream(cursor){
// 	while(!cursor.isExhausted()){
// 		if(cursor.hasNext()){
// 			var change = cursor.next()
// 			console.log("Callback Triggered")
// 			console.log(JSON.stringify(change))

// 		}
// 	}
// 	pollStream(cursor)
// }

module.exports = conn