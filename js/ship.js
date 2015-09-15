var Ship = function(){
	//this.id = id;
	this.size;
	this.name;
	this.hits;
	this.direction;
	this.coordinates=[];

};
Ship.prototype._drawShip = function(size, direction){
	var rowShip =[];
	if(direction==="Vertical"){
		for(var i=0; i<size;i++){
			rowShip [0] = "2";
		}
	}
	else{
		for(var i=0; i<size;i++){
			rowShip[i] = "2";
		}

	}
};

Ship.prototype._generateInicialPos= function(tableSize, direction){
	if(direction==="Vertical"){
		var limiteY = tableSize-2;
		var aleatorioY = Math.round(Math.random()*limiteY);
		alert("Número aleatorio entre 0 y limiteX:"+aleatorio);
	}
	else{
		var limiteX = tableSize-2;
		var aleatorioX = Math.round(Math.random()*limiteX);
		alert("Número aleatorio entre 0 y limiteX:"+aleatorio);
	}

}










