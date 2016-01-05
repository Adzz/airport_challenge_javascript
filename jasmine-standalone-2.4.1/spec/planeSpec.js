

describe("Plane", function (){

	var airport;
	var plane;

	beforeEach(function(){
		plane = new Plane();
		airport = jasmine.createSpyObj("airport", ["land", "takeOff"]);
	});

	it("Is not flying when it lands", function(){
		airport.land(plane);
		airport.takeOff(plane);
		airport.land(plane);
		expect(plane.flying).toEqual(false);
	});

	it("is not flying by default", function(){
		expect(plane.flying).toEqual(false);
	});

});