describe('Airport',function(){

  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane',['land']);
    weather = jasmine.createSpyObj('weather',['isStormy'])
  });

  it('has no planes by default',function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions',function(){

    beforeEach(function () {
      weather.isStormy.and.returnValue(false);
    });

    it('can clear planes for landing',function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('can clear planes for takeoff',function(){
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).toEqual([]);
    });

  });

  describe('when stormy',function(){

    beforeEach(function () {
      weather.isStormy.and.returnValue(true);
    });
  
    it('can check for stormy conditions', function(){
      expect(airport.isStormy()).toBeTruthy();
    });

  });

});