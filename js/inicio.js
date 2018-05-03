function pruebaemail (valor){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
		alert('email no valido');
	}
	else alert('email valido');
	}
	
	function valida(campo){
			var bRet = false;
			if (campo.value == "")
				alert("Falta información");
			else  if(campo.value.length<5)
              alert("Faltan caracteres");
            else
			 bRet = true;
			
    	return bRet;
		}


var data = new XMLHttpRequest();
data.open("GET","http//wwww.google.com/books")
data.onreadystatechange= function (){
    // manejador de datos
}
data.send("?person=kevin&apellido=montalvo");

var cadena= JSON.parse(data);