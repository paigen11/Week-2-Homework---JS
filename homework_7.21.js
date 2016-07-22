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
	var array = [];
	var array2 = [];
	for(var i = 0; i < size; i++){
		array.push(i);
		array2.push(i);
	}
	for(var i = 0; i < size; i++){
		array[i] = array2;
	}

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
			combo = j.toString() + i.toString();
			vert.push(combo);
		}
		winnigCombos.push(vert);
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