var Game = function(name) {
	this.name = name;
	this.score = 0;

	this.maxNumShots = 10;

	this.players = [];
	this.createPlayers();
};

Game.prototype.start = function(){
	console.log('Battle ship game started!');
	console.log('Here should start the game logic');
	console.log('TMP: Table ', this.players[0].table._field);
	var numShots = 0;
	do {
		var pos = this.getUserShot();
		numShots++;
		//Eval shot
		this.players[0].table._field[pos] = 'X';
	}while(numShots<10);
};

Game.prototype.createPlayers = function(){
	//TODO: Number of shots should be retrieved from a constant
	var numPlayers = 1;
	for(var i = 0; i< numPlayers; i++){
		var player = new Player('Player' + i);
		this.players.push(player);
	}
};

Game.prototype.shot = function(){
	this.x = window.prompt('shot in x?');
	this.y = window.prompt('shot in y?');
};

Game.prototype.getUserShot = function(){
	return parseInt(window.prompt('shot? (x)'));
};