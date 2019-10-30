var calculadora = (function(){

  var pantalla = "";
  var negativo = false;
  var punto = false;
  var oper = 0;
  var primerNumero = 0;
  var segundoNumero = 0;
  var resultado = 0;

//CAMBIO DE TAMAÑO DE LAS TECLAS
  function cambiarTamañoBoton(elemento){
    elemento.style="width: 21%; height:15.9%; margin: 0.5%;";
  }
  function cambiarTamañoBotonAbajo(elemento){
    elemento.style="width: 28%; height:40%; margin: 0.5%;";
  }
  function cambiarTamañoBotonSuma(elemento){
    elemento.style="width: 89%; height:99%; margin-left: 10px;";
  }

  function retornarTamaño(elemento){
    elemento.style="width: 22%; height: 62.91px; margin: 0;";
    switch (elemento.alt) {
      case "dividido":
        oper = 1;
        operaciones();
        break;
      case "por":
        oper = 2;
        operaciones();
        break;
      case "menos":
        oper = 3;
        operaciones();
        break;
      default:
      if(elemento.alt == "signo"){
        if(pantalla == ""){

        }else{
          if (negativo == false){
            negativo = true;
            document.getElementById("display").innerHTML= "-" + pantalla;
          }else{
            negativo = false;
            document.getElementById("display").innerHTML=pantalla;
          }
        }
      }else{
        if (elemento.alt == "raiz"){
          if(pantalla == ""){
            document.getElementById("display").innerHTML="0";
          }else{
            document.getElementById("display").innerHTML=pantalla;
          }
        }else{
          if (elemento.alt == "On"){
            document.getElementById("display").innerHTML="0";
            pantalla = "";
            primerNumero = 0;
            segundoNumero = 0;
            oper = 0;
            resultado = 0;
          }else{
            if (pantalla.length == 8){
              return false;
            }
            pantalla = pantalla + elemento.alt;
            document.getElementById("display").innerHTML=pantalla;
          }
        }
      }

    }


  }
  function retornarTamañoAbajo(elemento){
    elemento.style="width: 29%; height: 62.91px; margin: 0;";
    switch (elemento.alt) {
      case "igual":
        console.log(oper);
        operaciones();
        resul();
        break;
      default:
      if (pantalla.length == 8){
        return false;
      }
      if (elemento.alt == "punto"){
        if (pantalla == ""){
          pantalla = "0";
        }
        for(var i = 0; i < pantalla.length;i++){
          console.log(pantalla);
          if (pantalla[i] == "."){
            punto = true;
          }
        }
        if (punto == true){
          document.getElementById("display").innerHTML=pantalla;
        }else{
          pantalla = pantalla + ".";
          console.log(pantalla);
          document.getElementById("display").innerHTML=pantalla;
        }
      }else{
        if (elemento.alt == "0" && pantalla == ""){
          document.getElementById("display").innerHTML="0";
        }else{
          pantalla = pantalla + elemento.alt;
          document.getElementById("display").innerHTML=pantalla;
        }
      }
    }

  }
  function retornarTamañoSuma(elemento){
    elemento.style="width: 90%; height: 100%; margin-left: 10px;";
    oper = 4;
    operaciones();
  }
  function operaciones(){
    if (primerNumero == 0){
      primerNumero = parseFloat(pantalla);
      pantalla = "";
      document.getElementById("display").innerHTML=pantalla;
    }else{
      segundoNumero = parseFloat(pantalla);
      document.getElementById("display").innerHTML=pantalla;
    }

  }
  function resul(){
    switch (oper) {
      case 1:
      resultado = primerNumero/segundoNumero;
      resultado = resultado.toString();
      pantalla = "";
      if(8 < resultado.length){
        for(var i=0; i<resultado.length;i++){
          pantalla = pantalla + resultado[i];
          if (i == 7){
            document.getElementById("display").innerHTML=pantalla;
            primerNumero = parseFloat(pantalla);
          }
        }
      }else{
          document.getElementById("display").innerHTML=resultado;
          primerNumero = parseFloat(resultado);
      }

        break;
      case 2:
        resultado = primerNumero*segundoNumero;
        resultado = resultado.toString();
        pantalla = "";
        if(8 < resultado.length){
          for(var i=0; i<resultado.length;i++){
            pantalla = pantalla + resultado[i];
            if (i == 7){
              document.getElementById("display").innerHTML=pantalla;
              primerNumero = parseFloat(pantalla);
            }
          }
        }else{
            document.getElementById("display").innerHTML=resultado;
            primerNumero = parseFloat(resultado);
        }

        break;
      case 3:
      resultado = primerNumero-segundoNumero;
      resultado = resultado.toString();
      pantalla = "";
      if(8 < resultado.length){
        for(var i=0; i<resultado.length;i++){
          pantalla = pantalla + resultado[i];
          if (i == 7){
            document.getElementById("display").innerHTML=pantalla;
            primerNumero = parseFloat(pantalla);
          }
        }
      }else{
          document.getElementById("display").innerHTML=resultado;
          primerNumero = parseFloat(resultado);
      }

        break;
      case 4:
      resultado = primerNumero+segundoNumero;
      resultado = resultado.toString();
      pantalla = "";
      if(8 < resultado.length){
        for(var i=0; i<resultado.length;i++){
          pantalla = pantalla + resultado[i];
          if (i == 7){
            document.getElementById("display").innerHTML=pantalla;
            primerNumero = parseFloat(pantalla);
          }
        }
      }else{
          document.getElementById("display").innerHTML=resultado;
          primerNumero = parseFloat(resultado);
      }
        break;

      default:

    }
  }
  function valoresNulos(){
    resultado=0;
    primerNumero=0;
    segundoNumero=0;
    oper=0;
    pantalla="";
  }
//Eventos
  var Eventos = {
    init: function(){
      var botones = document.querySelectorAll(".tecla");
      var botones1 = document.querySelectorAll(".tecla1");
      var prueba = document.querySelectorAll("[class^='tecla']");
      for (var i = 0; i < prueba.length; i++){

      }
      for (var i = 0; i < botones.length; i++){
        botones[i].onmousedown = this.eventoPrecionar;
        botones[i].onmouseup = this.eventoClickUp;
      }
      for (var i = 0; i < botones1.length; i++){
        botones1[i].onmousedown = this.eventoPrecionarAbajo;
        botones1[i].onmouseup = this.eventoClickUp1;
      }
      document.getElementById("mas").onmousedown = this.eventoPrecionarSuma;
      document.getElementById("mas").onmouseup = this.eventoClickUpSuma;
    },
    eventoPrecionar: function(event){
      cambiarTamañoBoton(event.target);
    },
    eventoPrecionarAbajo: function(event){
      cambiarTamañoBotonAbajo(event.target);
    },
    eventoPrecionarSuma: function(event){
      cambiarTamañoBotonSuma(event.target);
    },
    eventoClickUp: function(event){
      retornarTamaño(event.target);
    },
    eventoClickUp1: function(event){
      retornarTamañoAbajo(event.target);
    },
    eventoClickUpSuma: function(event){
      retornarTamañoSuma(event.target);
    },


  }
  Eventos.init();
})();
