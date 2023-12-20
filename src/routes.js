const handlers = require('./handlers');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.getIndex,
  },
  {
    method: 'GET',
    path: '/waste',
    handler: handlers.getItems,
  },
  {
    method: 'GET',
    path: '/waste/{id}',
    handler: handlers.getItemById,
  },
  {
    method: 'POST',
    path: '/scanner',
    handler: handlers.postScanner,
  },
];

module.exports = routes;
