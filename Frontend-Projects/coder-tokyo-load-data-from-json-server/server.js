const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const port = 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON server is running on port ${port}!`);
});
