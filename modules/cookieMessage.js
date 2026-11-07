

const fortunes = require('../fortunes.json');

const getFortune = async () => {
  const randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

module.exports = getFortune;