const http = require('http');
const handler = require('serve-handler');

const PORT = 3000;

http.createServer(async (req, res) => await handler(req, res, { public: 'static' }))
  .listen(PORT, () => console.log(`> Running on http://localhost:${PORT}`));