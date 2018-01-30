function Airport(weather = new Weather) {
  this._weather = weather;
  this._hangar = [];
};

Airport.prototype = {

  planes: function() { 
    return this._hangar; 
  },

  clearForLanding: function(plane) { 
    if (this.isStormy()) { throw new Error('cannot land during storm')};
    this._hangar.push(plane); 
  },

  clearForTakeoff: function(plane) { 
    if (this.isStormy()) { throw new Error('cannot takeoff during storm')};
    this._hangar.pop(); 
  },

  isStormy: function() { 
    return this._weather.isStormy(); 
  }

};



