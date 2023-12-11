const handlers = require('./handlers');

const routes = [
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
];

module.exports = routes;