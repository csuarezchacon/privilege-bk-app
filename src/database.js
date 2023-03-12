const mongo = require('mongoose')

const { MONGODB_PTCL, MONGODB_HOST, MONGODB_NAME } = process.env
const URI = `${MONGODB_PTCL}://${MONGODB_HOST}/${MONGODB_NAME}`

mongo.connect(URI)
  .then( db => console.log(`MongoDB success connection: ${db.connection.host}`))
  .catch( err => console.log(`Error to connect: ${err}`))