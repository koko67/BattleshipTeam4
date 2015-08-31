var Game = function(name){
	this.name = name;
	this.maxNumberOfShots = 10; 
	//TODO Numbers of shots should be retrieved  from a constant
	this.maxNumshots = 10;

	this.players = [];

	this._createPLayers();
}

Game.prototype.start = function(){
	console.log(this.name, 'game started!');
	console.log('here should starts the logic of the game');
};

Game.prototype._createPLayers = function(){
	var numPlayers = 10
	for (var i = 0; i < numPlayers; i++) {
		var player = new Player("Player" + i);
		this.players.push(player);
	}
};