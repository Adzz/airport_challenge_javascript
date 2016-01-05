


function Plane(){
	this.flying = false;

};


Plane.prototype._notFlying = function() {
	this.flying = false;
};

Plane.prototype._isFlying = function() {
	this.flying = true;
};

