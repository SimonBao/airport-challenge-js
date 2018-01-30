function Weather() {
  this._STORMY_THRESHOLD = 0.8;
};

Weather.prototype = {

  isStormy: function() {
    return Math.random() > this._STORMY_THRESHOLD;
  }

};