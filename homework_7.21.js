function board(size){
	var array = [];
	var array2 = [];
	for(var i = 0; i < size; i++){
		array.push(i);
		array2.push(i);
	}
	for(var i = 0; i < size; i++){
		array[i] = array2;
	}
}

function winCombos(size){
	// builds the board
	var array = []; // outer array options
	var array2 = []; // inner array options
	var winningCombos = [] // array for winning combinations of strings
	for(var i = 0; i < size; i++){
		array.push(i);
		array2.push(i);
	}
	for(var i = 0; i < size; i++){
		array[i] = array2;
	}
	// this finds the winning combos within the array
	for(var i = 0; i < size; i++){
		var x = array;
		var y = array2;
		var horiz = [];
		var vert = [];
		var diag = [];
		
		var combo;
		for(var j = 0; j < x.length; j++){
			combo = i.toString() + j.toString();
			horiz.push(combo);
		}
		winningCombos.push(horiz);
		for(var j = 0; j < y.length; j++){
			combo = j.toString() + i.toString(); //swapped j and i to keep the order of the concatenated strings correct (the coordinates)
			vert.push(combo);
		}
		winningCombos.push(vert);
		if(x.indexOf(i) === y.indexOf(i)){
			combo = i.toString() + i.toString();
			diag.push(combo);
		}
		if(diag.indexOf(0) !== -1){
			winningCombos.push(diag);
		}
	}
	console.log(winningCombos);
}

winCombos(4);