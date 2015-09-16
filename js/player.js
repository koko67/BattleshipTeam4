var Player = function(name){
	this.name = name;
	this.score = 0;
	this.numShots = 0;
	//TODO: table size should be reead from a constant
	this.table = new Table(10);
};
