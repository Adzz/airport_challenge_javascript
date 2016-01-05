describe("Airport", function(){

	var airport;
	var plane;

	beforeEach(function(){
		airport = new Airport();
		plane = jasmine.createSpyObj("plane", ["_isFlying", "_notFlying"]);
	});

	it("Has a default capacity of 40", function(){
		expect(airport.capacity).toBe(40)
	});

	describe("#land", function(){
		describe("Stormy", function(){
			beforeEach(function(){
				spyOn(Math, "random").and.returnValue(0.9);
			});

			it("won't land a plane when it's stormy", function(){
				expect(function() {airport.land(plane)}).toThrowError("Conditions too stormy. No planes can land.");
			});
		});

		describe("Not Stormy", function(){
			beforeEach(function(){
				spyOn(Math, "random").and.returnValue(0.7);
			});

			it("Lands a Plane; Adds landed plane to list of planes", function(){
				airport.land(plane);
				expect(airport.planes.length).toEqual(1);
			});

			it("Can confirm a plane has landed", function(){
				airport.land(plane);
				expect(airport.planes).toEqual([plane]);
			});

			it("Won't land a plane that has already been landed", function(){
				airport.land(plane);
				expect(function() {airport.land(plane)}).toThrowError("That plane is already on the ground!");
			});

			it("Raises an error when at capacity", function(){
				spyOn(airport, "_isFull").and.returnValue(true);
				expect(function() {airport.land(plane)}).toThrowError("Airport full! No Planes can land!");
			});
		});
	});

	describe("#takeOff", function(){
		describe("Stormy", function(){
			beforeEach(function(){
				spyOn(Math, "random").and.returnValue(0.9);
			});

			it("Won't take off a plane when it is stormy", function(){
				airport.planes.push(plane);
				expect(function() {airport.takeOff(plane)}).toThrowError("Conditions too stormy. No planes can take off.");
			});
		});

		describe("Not Stormy", function(){
			beforeEach(function(){
				spyOn(Math, "random").and.returnValue(0.5);
			});

			it("Allows a plane to take off", function(){
				airport.land(plane);
				airport.takeOff(plane);
				expect(airport.planes.length).toEqual(0);
			});

			it("Won't take off a plane that isn't in the airport", function(){
				airport.land(plane);
				airport.takeOff(plane)
				expect(function() {airport.takeOff(plane)}).toThrowError("That plane isn't here!");
			});
		});
	});
}); 