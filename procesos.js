function procesos(){
    var var1 =document.getElementById ('num1').value;
    var var2 =document.getElementById ('num2').value;
    for(i=1; i<=5; i++){
        if(i==1){
            var suma = parseInt(var1) + parseInt(var2);
            document.getElementById ("suma").value =suma;
        }
        if(i==2){
            var resta = parseInt(var1) - parseInt(var2);
            document.getElementById ("resta").value =resta;
        }
        if(i==3){
            var multiplicación = parseInt(var1) * parseInt(var2);
            document.getElementById ("multi").value = multiplicacion;
        }
        if(i==4){
            var divición= parseInt(var1) / parseInt(var2);
            document.getElementById ("divi").value =divicion;
        }
        if(i==5){
            var cociente = parseInt(var1) % parseInt(var2);
            document.getElementById ("coci").value =cociente;
        }
    }
  
}
