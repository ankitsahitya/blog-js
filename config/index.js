const server = require('./http')
const { createIo } = require('./socket')

require('./db')

createIo(server)

server.listen("3000", () => {
  console.log("listening at port 3000")
})