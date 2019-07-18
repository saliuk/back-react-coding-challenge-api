var faker = require('faker')
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
exports.onconnect = connection => {
  connection.sockets.on('connection', socket => {
    let bleat = setInterval(() => {
      connection.emit(
        'new bleat',
        JSON.stringify({ message: faker.lorem.words(), date: new Date() }),
      )
    }, randomIntFromInterval(5000, 10000))

    socket.on('disconnect', () => {
      clearInterval(bleat)
    })
  })
}
