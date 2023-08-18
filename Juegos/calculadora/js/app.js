var tablero = document.getElementById("tablero");
var botonesNumericos = document.querySelectorAll(".numeros .botones input[type='button']");


var operacion = "";
botonesNumericos.forEach(function(boton) {
    boton.addEventListener("click", function() {
        var valor = boton.value;
        if (valor === "=") {
            try {
                var resultado = eval(operacion);
                tablero.textContent = resultado;
                operacion = resultado.toString();
            } catch (error) {
                tablero.textContent = "Error";
            }
        } else if (valor === "C") {
            operacion = "";
            tablero.textContent = "";
        } else {
            operacion += valor;
            tablero.textContent += valor;
        }
    });
});
