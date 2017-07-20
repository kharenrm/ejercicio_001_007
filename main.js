//Escribe una función que reciba un array que imprima las parejas que la suma de 0
function buscarPareja(array){
	for(var i=0;i<array.length;i++){

	}

}

console.log(buscarPareja([2,-5,10,5,4,-10,0]));

/*Escribe una funciòn que reciba un string de nùmeros separados por columnas, cree un array
a partir del string y devuelva la media de todos los valores
BONUS:
Quitar los nùmero repetidos 
*/
function separaString(cadena){
	var array = cadena.split(':');
	var suma = 0;
	for(var i=0;i<array.length;i++){
		suma = suma + parseInt(array[i], 10);
	}
	return suma/array.length;
}

function eliminaRepetidos(array){
	var copia = array.slice();
	console.log(array.indexOf("100"));
	for(var i=0; i<array.length;i++){

	}
}
console.log(eliminaRepetidos(["80","70","90","100","100"]))
//console.log(separaString('80:70:90:100:100'));