/***
 * created 9/1/2015
 *
 */
var Table = function(size){
    this.size = size;
    this.ships = [];
    this._field = [];
    this._createShips();
    this._initField();
    this._placeShips();
};
Table.prototype._createShips = function(){
    var numShips = 3;
    for(var i = 0; i< numShips; i++){
        var ship = new Ship(i, 3);
        this.ships.push(ship);
    }
};

Table.prototype._initField = function(){
    for(var i = 0; i< this.size; i++) {
        this._field.push('-');
    }
};

Table.prototype._placeShips = function(){
    for(var i = 0; i < this.ships.length; i++){
        var ship = this.ships[i];
        var initPos = parseInt(Math.random() * (this.size - ship.size));
        for(j = initPos; j< (initPos + ship.size); j++){
            this._field[j] = ship.id;
        }
    }
};