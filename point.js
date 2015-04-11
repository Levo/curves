function point(x,y){
	this.pos = {x:x, y:y};
}


point.prototype.set = function(x,y){
	this.pos.x = x;
	this.pos.y = y;
}

point.prototype.mp = function(p){
	var returnPoint = new point(0,0);
	var x = (this.pos.x + p.pos.x)/2;
	var y = (this.pos.y + p.pos.y)/2;
	returnPoint.set(x,y);
	return returnPoint;
}
