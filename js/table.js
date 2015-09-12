/**
 * Created by ArielWagner on 02/09/2015.
 */
var Table = function(size){
    this.ships = new Array();     //created the array for the ships
    this.board = [];
    //this._field = [];
    this._createBoard(size);
    this._createShips();
    //console.log(this._getCellState(0,1));
    //this._placeShips();
};

Table.prototype._createBoard = function(boardSize){
    this.board = [];
    for(var row = 0; row < boardSize; row++){
        var rowCollection = [];
        for(var col = 0; col < boardSize; col++){
            rowCollection[col] = "0";
        }
        this.board[row] = rowCollection;
    }
};
Table.prototype._createShips = function(){
    var ship1 = new Ship();
    ship1 = {name:"Aircraft carrier", size:5, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0],[0,0],[0,0]]};
    var ship2 = new Ship();
    ship2 = {name:"Battleship", size:4, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0],[0,0]]};
    var ship3 = new Ship();
    ship3 = {name:"Submarine", size:3, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0]]};
    var ship4 = new Ship();
    ship4 = {name:"Destroyer", size:3, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0]]};
    var ship5 = new Ship();
    ship5 = {name:"Patrol boat", size:2, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0]]};
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