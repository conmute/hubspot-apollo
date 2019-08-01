module.exports = (server, { nextRequestHandler }) => {
  server.all('*', (req, res) => nextRequestHandler(req, res))
}
