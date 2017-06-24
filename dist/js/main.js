
function initMap() {
    var latLng = {
        lat: 20.6772885,
        lng: -103.3856328
    };
    var map = new google.maps.Map(document.getElementById('mapa'), {
        "center": latLng,
        // center: {lat: 20.6772885, lng: -103.3856328},
        "zoom": 14,
        "mapTypeId": google.maps.MapTypeId.ROADMAP
        // "draggable": false
        // "scrollwheel": false
    });

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: "GDLWEBCAMP"
    });

    var contenido = "<h2>GDLWEBCAMP</h2>";
    contenido += "<p>Del 10 al 12 de Diciembre</p>";
    contenido += "<p>Visítanos</p>";
    var informacion = new google.maps.InfoWindow({
        content: contenido
    });

    marker.addListener("click", function () {
        informacion.open(map, marker);
    });
}
(function () {
var regalo = document.getElementById("regalo");
// API Key
var apiKey = "AIzaSyBw_6T3jLkd9kc7EOk8mYq3eFVKdgjZhM8";
document.addEventListener("DOMContentLoaded", function () {



    // Campos Datos Usuario
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var email = document.getElementById("email");

    // Campos pases
    var paseDia = document.getElementById("pase_dia");
    var paseCompleto = document.getElementById("pase_completo");
    var paseDosDias = document.getElementById("pase_dosdias");

    // Botones y divs
    var calcular = document.getElementById("calcular");
    var errorDiv = document.getElementById("error");
    var botonRegistro = document.getElementById("btnRegistro");
    var listaProductos = document.getElementById("lista-productos");
    var suma = document.getElementById(("suma-total"));

    // Extras
    var etiquetas = document.getElementById("etiquetas");
    var camisas = document.getElementById("camisa_evento");


    nombre.addEventListener("blur", validarCampos);
    apellido.addEventListener("blur", validarCampos);
    email.addEventListener("blur", validarCampos);
    email.addEventListener("blur", validarMail);

    calcular.addEventListener("click", calcularMontos);

    paseDia.addEventListener("blur", mostrarDias);
    paseDosDias.addEventListener("blur", mostrarDias);
    paseCompleto.addEventListener("blur", mostrarDias);

    function calcularMontos(event) {
        event.preventDefault();
        if (regalo.value === "") {
            alert("Debes elegir un regalo");
            regalo.focus();
        } else {
            var boletosDia = parseInt(paseDia.value, 10) || 0,
                boletosCompleto = parseInt(paseCompleto.value, 10) || 0,
                boletoDosDias = parseInt(paseDosDias.value, 10) || 0,
                cantidadCamisas = parseInt(camisas.value, 10) || 0,
                cantidadEtiquetas = parseInt(etiquetas.value, 10) || 0;

            var totalPagar = (boletosDia * 30) + (boletoDosDias * 45) + (boletosCompleto * 50)
                            + (cantidadCamisas * 10 * .93) + (cantidadEtiquetas * 2);
            var listadoProductos = [];
            if (boletosDia > 0) listadoProductos.push(boletosDia + " Pases por día");
            if (boletoDosDias > 0) listadoProductos.push(boletoDosDias + " Pases por dos días");
            if (boletosCompleto > 0) listadoProductos.push(boletosCompleto + " Pases completos");
            if (cantidadCamisas > 0) listadoProductos.push(cantidadCamisas + " Camisas");
            if (cantidadEtiquetas > 0) listadoProductos.push(cantidadEtiquetas + " Etiquetas");

            // console.log(totalPagar);

            var resultado = "";
            for(var i = 0; i < listadoProductos.length; i++) {
                resultado += listadoProductos[i] + "<br>";
            }
            listaProductos.style.display = "block";
            listaProductos.innerHTML = resultado;

            suma.style.display = "block";
            suma.innerHTML = "$ " + totalPagar.toFixed(2);
        } // if que comprueba si se ha elegido un regalo

    } // Función calcularMontos

    function mostrarDias() {
        var boletosDia = parseInt(paseDia.value, 10) || 0,
            boletosCompleto = parseInt(paseCompleto.value, 10) || 0,
            boletoDosDias = parseInt(paseDosDias.value, 10) || 0;

        var diasElegidos = [];
        if (boletosDia > 0) diasElegidos.push("viernes");
        if (boletoDosDias > 0) diasElegidos.push("viernes", "sabado");
        if (boletosCompleto > 0) diasElegidos.push("viernes", "sabado", "domingo");
        console.log(diasElegidos);
        for (var i = 0; i < diasElegidos.length; i++) {
            console.log(diasElegidos[i]);
            document.getElementById(diasElegidos[i]).style.display = "block";
        }

    } // Función mostrarDias

    function validarCampos() {
        console.log(this.value);
        if (this.value == "") {
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "El campo " + this.name + " es obligatorio";
            this.style.border = "1px solid red";
            errorDiv.style.border = "1px solid red";
        } else {
            errorDiv.style.display = "none";
            this.style.border = "1px solid #cccccc";
        }
    } // Validar campos

    function validarMail() {
        if (this.value.indexOf("@") > -1) {
            errorDiv.style.display = "none";
            this.style.border = "1px solid #cccccc";
        } else {
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "El campo " + this.name + " debe contener un email válido";
            this.style.border = "1px solid red";
            errorDiv.style.border = "1px solid red";
        }
    }

}); // DOMContentLoaded
})();