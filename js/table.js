/**
 * Created by ArielWagner on 02/09/2015.
 */
var Table = function(size){
    this.ships = new Array();     //created the array for the ships
    this.board = [];
    // this._field = [];
    this.sunkShips = 0;
    this.gameOver = false;
    this._createBoard(size);
    this._createShips();
    this.shipCount;
    this._generateShipsCoordinates();
    //console.log(this._getCellState(0,1));
    //this._placeShips();
};

Table.prototype._generateShipsCoordinates = function(){
    for (var i = 0; i < this.ships.length; i++) {
        this._randomShipLocation(i);
    };
};

Table.prototype._createBoard = function(boardSize){
    this.board = [];
    for(var row = 0; row < boardSize; row++){
        var rowCollection = [];
        for(var col = 0; col < boardSize; col++){
            rowCollection[col] = "0";
        }
        this.board[row] = rowCollection;
        console.log(this.board[row]);
    }
};
Table.prototype._createShips = function(){
    var ship1 = new Ship();
    ship1 = {name:"Aircraft carrier", size:5, hits:0, direction:"Horizontal", coordinates:[[0,0],[0,0],[0,0],[0,0],[0,0]]};
    var ship2 = new Ship();
    ship2 = {name:"Battleship", size:4, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0],[0,0]]};
    var ship3 = new Ship();
    ship3 = {name:"Submarine", size:3, hits:0, direction:"Horizontal", coordinates:[[0,0],[0,0],[0,0]]};
    var ship4 = new Ship();
    ship4 = {name:"Destroyer", size:3, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0]]};
    var ship5 = new Ship();
    ship5 = {name:"Patrol boat", size:2, hits:0, direction:"Horizontal", coordinates:[[0,3],[0,4]]};
    /**
     * initializate the ships and push in the array of ships
     */
    this.ships.push(ship1,ship2,ship3,ship4,ship5);


    /*
    {
        0:{name:"Aircraft carrier", size:5, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0],[0,0],[0,0]]},
        1:{name:"Battleship", size:4, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0],[0,0]]},
        2:{name:"Submarine", size:3, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0]]},
        3:{name:"Destroyer", size:3, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0]]},
        4:{name:"Patrol boat", size:2, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0]]}
    };*/
    this.shipCount = 5;
};
Table.prototype._getCellState = function(x, y){

    if(this.board[x][y] == "2")
        return "Hit";
    else if(this.board[x][y] == "1")
        return "Miss";
    else if(this.board[x][y] == "0")
        return "Unknown";
};

// Table.prototype.drawShips = function(){
//     for (var i = 0; i < Things.length; i++) {
//         Things[i]
//     };
// };

// Table.prototype._generateCoord = function(){
//     var posX = parseInt(Math.random()* this.board.length);
//     var posY = parseInt(Math.random()* this.board.length);
//     var coord = [];
//     coord.push(posX);
//     coord.push(posY);
//     return coord;
// };

Table.prototype.validShipCoordinate = function(coord){
    if(coord[0] < this.board.length && coord[0] >= 0 && 
        coord[1] < this.board.length && coord[1] >= 0){
        for(var i = 0; i < this.shipCount; i++){
            for(var x = 0; x < this.ships[i].coordinates.length; x++){
                if(this.ships[i].coordinates[x][0] == coord[0] && 
                    this.ships[i].coordinates[x][1] == coord[1]){
                   // console.log('crash');
                    return false;
                }
            }
        }
        console.log('-');
        return true;
    }
    return false;
}

Table.prototype._randomShipLocation = function(shipIndex){

    var index = 0;
    //var directions = ["Vertical","Horizontal"];
    var shipSize = this.ships[shipIndex].size;

    while(index < shipSize){
        var index = 0;
        var coordinates = [];
        var coord = this.randomCoordinate();
        //var direction = directions[Math.floor((Math.random() * 2) + 0)];

        for(var next = 0; next < shipSize; next++){

            var newX = [(next - 1) + coord[0], coord[1]];
            var newY = [coord[0], (next - 1) + coord[1]];

            if(this.ships[shipIndex].direction == "Horizontal" && this.validShipCoordinate(newX) != false){
                coordinates[index] = newX;
                index++;
            }
            else if(this.ships[shipIndex].direction == "Vertical" && this.validShipCoordinate(newY) != false){
                coordinates[index] = newY;
                index++;
            }
            else
                break;
        }
    }
    //this.ships[shipIndex].direction = direction;
    this.ships[shipIndex].coordinates = coordinates;
    this.displayCoordinate(coordinates);
}

Table.prototype.randomCoordinate = function(){
    do{
        var coord = [Math.floor((Math.random() * this.board.length) + 0),
         Math.floor((Math.random() * this.board.length) + 0)];
    } while (!this.validShipCoordinate(coord));
    return coord;
}

Table.prototype.validShotCoordinate =  function(coord){
    if(coord[0] < this.board.length && coord[0] >= 0 && 
        coord[1] < this.board.length && coord[1] >= 0){
        if(this.board[coord[0]][coord[1]] == "0"){
            return true;
        }
    }
    return false;
}

Table.prototype.displayCoordinate = function(coordinate){
    for (var i = 0; i < coordinate.length; i++) {
        console.log(coordinate[i]);
    };
};