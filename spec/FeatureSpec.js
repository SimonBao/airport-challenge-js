describe('Feature test', function () {
  var plane;
  var airport;
  var weather;

  beforeEach(function () {
    plane = new Plane();
    airport = new Airport;
    weather = jasmine.createSpyObj('weather',['isStormy'])
  });

  describe('under normal conditions',function(){

    beforeEach(function () {
      weather.isStormy.and.returnValue(false);
    });

    it('planes can be instructed to land at an airport',function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('planes can be instructed to take off from airport',function(){
      plane.land(airport);
      plane.takeoff();
      expect(airport.planes()).not.toContain(plane);
    });

  });

  describe('when weather is stormy',function(){

    beforeEach(function () {
      weather.isStormy.and.returnValue(true);
    });

    it('blocks takeoff',function(){
      plane.land(airport);
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff()} ).toThrowError('cannot takeoff during storm')
      expect(airport.planes()).toContain(plane);
    });

    it('blocks landing',function(){
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ plane.land(airport)} ).toThrowError('cannot land during storm')
      expect(airport.planes()).not.toContain(plane);
    });

});

});