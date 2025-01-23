const MAX_PRICE = 100000;

const TYPE = [
  {
    name: 'bungalow',
    min: 0,
  },

  {
    name: 'flat',
    min: 1000,
  },

  {
    name: 'hotel',
    min: 3000,
  },

  {
    name: 'house',
    min: 5000,
  },

  {
    name: 'palace',
    min: 10000,
  },
];

const getMaxPrice = () => {
  return MAX_PRICE;
};

function getType () {
  return TYPE;
};

export {getMaxPrice, getType};
