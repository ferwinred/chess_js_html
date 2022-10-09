const server = require('./API');

const { port } = require('./lib/config');

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});