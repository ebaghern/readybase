const fs = require('fs');
const path = require('path');
const controllers = fs
  .readdirSync(path.resolve(__dirname, './'))
  .filter((file) => file.includes('.js') && file !== 'index.js')
  .map((file) => file.replace('.js', ''));

module.exports = controllers;
