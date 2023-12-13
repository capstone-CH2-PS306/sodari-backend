const fs = require('fs');
const path = require('path');

const wasteData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'waste.json'), 'utf-8')
);

const getIndex = (request, h) => {
  return {
    status: 'success',
    message: 'Hello world!',
  };
};

const getItems = (request, h) => {
  return {
    status: 'success',
    data: wasteData.slice(0, 10),
  };
};

const getItemById = (request, h) => {
  const itemId = request.params.id;
  const selectedItem = wasteData.find((item) => item.id === itemId);

  if (!selectedItem) {
    return h
      .response({
        status: 'fail',
        message: 'Item not found',
      })
      .code(404);
  }

  return {
    status: 'success',
    data: selectedItem,
  };
};

module.exports = {
  getIndex,
  getItems,
  getItemById,
};
