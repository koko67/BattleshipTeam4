var Game = function(name) {
	this.name = name;
	this.score = 0;
	//TODO Numbers of shots should be retrieved  from a constant
	this.maxNumshots = 10;
	this.gameOver = false;
	this.players = [];
	this.createPlayers();
};

Game.prototype.start = function(){
	console.log('Battle ship game started!');
	console.log('Here should start the game logic');
	console.log('TMP: Table ', this.players[0].table);
	this.maxNumshots = prompt('insert the number of shots to play (IT SHOULD BE GREATHER THAN 20))');
	// var numShots = 0;
	// do {
	// 	var pos = this.getUserShot();
	// 	numShots++;
	// 	//Eval shot
	// 	this.players[0].table._field[pos] = 'O';
	// }while(numShots<8);
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







Game.prototype.fireShot = function(coord){
    flag = false;
    for(var i = 0; i < this.players[0].table.shipCount; i++){
        for(x = 0; x < this.players[0].table.ships[i].coordinates.length; x++){
            if( this.players[0].table.ships[i].coordinates[x][0] == coord[0] && 
            	this.players[0].table.ships[i].coordinates[x][1] == coord[1]){
                this.players[0].table.board[coord[0]][coord[1]] = 2;
                this.players[0].table.ships[i].hits++;
                flag = true;
                this.players[0].table.board[coord[0]][coord[1]] = 'x';
                break;
            } else {
            	this.players[0].table.board[coord[0]][coord[1]] = '-';
            	break;
            }
        }
    }
    if(!flag){
        this.players[0].table.board[coord[0]][coord[1]] = 1;
    }
    this.isSunk();
    this.maxNumshots--;
}

Game.prototype.isSunk = function(){
    for(var i = 0; i < this.players[0].table.shipCount; i++){
        if(this.players[0].table.ships[i].hits == this.players[0].table.ships[i].size){
            this.players[0].table.sunkShips++;
        }
    }
    if((this.players[0].table.sunkShips == this.players[0].table.shipCount) && 
    	this.maxNumshots >= 1){
        this.gameOver = true;
        alert('Game Over! you win');
    } else if((this.players[0].table.sunkShips != this.players[0].table.shipCount) && this.maxNumshots == 1){
    	alert('Game Over! you lose');
    }
}