function Airport() {
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
    return false; 
  }

};



