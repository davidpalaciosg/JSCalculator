$(document).ready(function () {

    $("#screen").val(0);
    var resultado = 0;
    var cadena = "";
    var signo = "";
    var numactual="";
    //BOOL QUE DETERMINA SI FALTA UN NUMERO
    var pendiente = true;

    $(".boton-teclado").click(function (e) {
        e.preventDefault();

        var valor = $(this).html();
        if(valor=="C") //Borra toda la info de la calculadora
        {
            cadena="";
            resultado=0;
            $("#screen").val(0);
            signo="";
            numactual="";
        }
        else if(valor=="CE")
        {
            lengthcadena = cadena.length;
            cadena = cadena.substring(0, lengthcadena - 1);

            lenghtnumactual = numactual.length;
            numactual = numactual.substring(0,lenghtnumactual-1);
            $("#screen").val(numactual);

        }
        else{

        cadena += valor;
        numactual+=valor;
        $("#screen").val(numactual);
        pendiente = false;
        }
    });
    
    $(".boton-ope").click(function (e) {
        e.preventDefault();

        if (cadena.length > 0) //Si la cadena no está vacía
        {
            //Tiene mínimo un número
            numactual="";
            signo = $(this).html();
            $("#screen").val("");
            
            //CAMBIAR SIGNO FINAL
            if (pendiente == true) {
                //Eliminar último signo
                length = cadena.length;
                cadena = cadena.substring(0, length - 1);
                //Añadir nuevo signo
                if (signo == "+") {
                    cadena += "+";
                }
                else if (signo == "-") {
                    cadena += "-";
                }
                else if (signo == "*") {
                    cadena += "*";
                }
                else if (signo == "/") {
                    cadena += "/";
                }
                else if (signo == "=") {
                    resultado = eval(cadena);
                    $("#screen").val(resultado);
                    console.log("Resultado: " + resultado);
                    cadena="";
                }
                pendiente = true; //Después del signo se necesitan números
            }

            //EVITAR SIGNOS SEGUIDOS
            if (pendiente == false) { //Si no faltan numeros
                if (signo == "+") {
                    cadena += "+";
                }
                else if (signo == "-") {
                    cadena += "-";
                }
                else if (signo == "*") {
                    cadena += "*";
                }
                else if (signo == "/") {
                    cadena += "/";
                }
                else if (signo == "=") {
                    resultado = eval(cadena);
                    $("#screen").val(resultado);
                    console.log("Resultado: " + resultado);
                    cadena="";
                }
                pendiente = true; //Después del signo se necesitan números
            }


        }
    });

})