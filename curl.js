const request = require('request');

module.exports = function(done, url) {
  request(url, (error, _, body) => {
    if (error) {
      throw error;
    } else {
      done(body);
    }
  });
};
