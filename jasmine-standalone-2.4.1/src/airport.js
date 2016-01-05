const MAX_CAPACITY = 40;

function Airport() {
	this.planes = []

	
};


Airport.prototype.capacity = function() {
	return MAX_CAPACITY;
};


Airport.prototype.land = function(plane) {
	if(this._isFull()){
		throw new TypeError("Airport full! No Planes can land!");}
	if(this._isStormy()) {
		throw new TypeError("Conditions too stormy. No planes can land.");}
	if(this._isPresent(plane)){
		throw new TypeError("That plane is already on the ground!");}
	else {
		this.makesLanded(plane);
		this.planes.push(plane);
	}
};

Airport.prototype.makesLanded = function(plane){
	plane._notFlying;
};

Airport.prototype._isStormy = function(){
	return Math.floor((Math.random() * 100) + 1) >= 80;
};

Airport.prototype._isPresent = function(plane){
	if(this.planes.indexOf(plane)<0) {
		return false
	};
	return true
};

Airport.prototype._isFull = function(){
	this.planes.length >= MAX_CAPACITY;

};


Airport.prototype.takeOff = function(plane){
	if(this._isPresent(plane) == false) {
		throw new TypeError("That plane isn't here!");}
	if(this._isStormy()) {
		throw new TypeError("Conditions too stormy. No planes can take off.");
	}
	this._removePlaneFromAirport(plane);
	this._makesFlying(plane);
	plane
};


Airport.prototype._removePlaneFromAirport = function(plane) {
	position = this.planes.indexOf(plane);
	if (~position) {
		this.planes.splice(position, 1);
	}
};

Airport.prototype._makesFlying = function(plane){
	plane._isFlying;
};




















