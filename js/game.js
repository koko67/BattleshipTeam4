var Game = function(name) {
	this.name = name;
	this.score = 0;
	//TODO Numbers of shots should be retrieved  from a constant
	this.maxNumshots = 10;
	this.gameOver = false;
	this.players = [];
	this.createPlayers();
};

/**
 *  This method init the Battleship game
 *  @parameters numberOfShots
 *
 */
Game.prototype.start = function(){
	console.log('Battle ship game started!');
	console.log('Here should start the game logic');
	console.log('TMP: Table ', this.players[0].table);
	this.maxNumshots = prompt('insert the number of shots to play (IT SHOULD BE GREATHER THAN 10))');
};
/**
 * This method create players for more that one players
 *
 */
Game.prototype.createPlayers = function(){
	//TODO: Number of shots should be retrieved from a constant
	var numPlayers = 1;
	for(var i = 0; i< numPlayers; i++){
		var player = new Player('Player' + i);
		this.players.push(player);
	}
};
/**
 * Show  a windows prompt to the user puts the coordinates of shots
 *
 */
Game.prototype.shot = function(){
	this.x = window.prompt('shot in x?');
	this.y = window.prompt('shot in y?');
};
/**
 *
 *
 * @returns {Number}
 */
Game.prototype.getUserShot = function(){
	return parseInt(window.prompt('shot? (x)'));
};

/**
 *
 *
 * @param coord
 */
Game.prototype.fireShot = function(coord){
    flag = false;
    for(var i = 0; i < this.players[0].table.shipCount; i++){
        for(x = 0; x < this.players[0].table.ships[i].coordinates.length; x++){
            if( this.players[0].table.ships[i].coordinates[x][0] == coord[0] &&
                this.players[0].table.ships[i].coordinates[x][1] == coord[1]){
                this.players[0].table.ships[i].hits++;
                flag = true;
                this.players[0].table.board[coord[0]][coord[1]] = 'X';
            } else {
                this.players[0].table.board[coord[0]][coord[1]] = 'X';
            }
        }
    }
    if(!flag){
        this.players[0].table.board[coord[0]][coord[1]] = '-';
    }
    this.isSunk();
    this.displayBoard();
    this.maxNumshots--;
}
/**
 *
 * @return the result of the game
 */
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

Game.prototype.displayBoard =  function(){
    for(var i = 0 ; i < this.players[0].table.board.length ; i ++){
        console.log(this.players[0].table.board[i]);
    }
};