$(document).ready(function () {


  $("#btn1").hide();

  var valor;
  var a;
  var attempt = 4;

  var lista = [{
      img: "dSociedad.png",
      class: "dp1"

    },
    {
      img: "dClienteEmpresario.png",
      class: "dp2"
    },
    {
      img: "dProducto.png",
      class: "dp3"
    },
    {
      img: "dJuicio.png",
      class: "dp4"
    },
    {
      img: "dAdmin.png",
      class: "dp5"
    },
    {
      img: "dProfesion.png",
      class: "dp6"
    },
    {
      img: "dColegas.png",
      class: "dp7"
    },
    {
      img: "dPersonal.png",
      class: "dp8"
    }
  ];



  var total = lista.length;
  var aleatorio;
  var selec;


  var final = [];


  for (i = 0; i < total; i++) {
    aleatorio = Math.floor(Math.random() * (lista.length));

    selec = lista[aleatorio];

    lista.splice(aleatorio, 1);


    var obj = {
      img: selec.img,
      class: selec.class
    };



    final.push(obj);

  }

  var template = ''

  final.forEach(el =>

    template += `<div class="drop ${el.class}">
                <img src="./img/${el.img}"/>
            </div>`

  );

  $("#pon").html(template);


  $('div.drop').draggable({
    revert: true
  });


  $('.em1').droppable({
    // primera ley
    //accept: '.dp1',

    drop: function (event, ui) {
      valor = ui.draggable;

      if (valor.hasClass("dp1")) {
        valor.hide();
        a = parseInt($("#lab1").val());
        a = a + 1;
        a.toString();
        console.log(a);

        $("#lab1").val(a);

      } else {

        attempt--;

        if (attempt == 0) {
          swal({
              title: "Game over",
              text: "Tienes que estudiar mas?",
              icon: "warning",
              buttons: true,
              dangerMode: "yes",
            })
            .then((willDelete) => {
              if (willDelete) {
                window.location = "codigo.html";
              } else {
                $('div.drop').draggable("disable");
                $("#btn1").show();
                swal("ok no problema!");
              }
            });
        } else {
          swal("Recuerda que esta descripción se enfoca en el bienestar e interés social.", "te quedan " + attempt + " intentos", "error");
        }

      }
      console.log("el score es " + a);

      if (a == 8) {
        swal("Ganaste felicitaciones Ingeniero", "", "success").then((value) => {
          window.location = "juego.html";
        });
      }
    }
  });
  $('.em2').droppable({
    //Ley 2
    //accept: '.dp1',

    drop: function (event, ui) {
      valor = ui.draggable;
      var a;

      if (valor.hasClass("dp2")) {
        valor.hide();
        a = parseInt($("#lab1").val());
        a = a + 1;
        a.toString();
        console.log(a);

        $("#lab1").val(a);
      } else {

        attempt--;

        if (attempt == 0) {
          swal({
              title: "Game over",
              text: "Tienes que estudiar mas?",
              icon: "warning",
              buttons: true,
              dangerMode: "yes",
            })
            .then((willDelete) => {
              if (willDelete) {
                window.location = "codigo.html";
              } else {
                $('div.drop').draggable("disable");
                $("#btn1").show();
                swal("ok no problema!");
              }
            });
        } else {
          swal("Esta descripción busca armonizar las necesidades de los clientes y empresarios.", "te quedan " + attempt + " intentos", "error");
        }
      }
      console.log("el score es " + a);

      if (a == 8) {
        swal("Ganaste felicitaciones Ingeniero", "", "success").then((value) => {
          window.location = "juego.html";
        });
      }
    }
  });
  $('.em3').droppable({
    //Ley 3
    //accept: '.dp1',

    drop: function (event, ui) {
      valor = ui.draggable;

      if (valor.hasClass("dp3")) {
        valor.hide();
        a = parseInt($("#lab1").val());
        a = a + 1;
        a.toString();
        console.log(a);

        $("#lab1").val(a);
      } else {

        attempt--;

        if (attempt == 0) {
          swal({
              title: "Game over",
              text: "Tienes que estudiar mas?",
              icon: "warning",
              buttons: true,
              dangerMode: "yes",
            })
            .then((willDelete) => {
              if (willDelete) {
                window.location = "codigo.html";
              } else {
                $('div.drop').draggable("disable");
                $("#btn1").show();
                swal("ok no problema!");
              }
            });
        } else {
          swal("Esta descripción se enfoca en procurar la alta calidad y asegurar las metas y objetivos para cualquier proyecto.", "te quedan " + attempt + " intentos", "error");
        }
      }
      console.log("el score es " + a);

      if (a == 8) {
        swal("Ganaste felicitaciones Ingeniero", "", "success").then((value) => {
          window.location = "juego.html";
        });
      }
    }
  });
  $('.em4').droppable({
    //Ley 4
    //accept: '.dp1',

    drop: function (event, ui) {
      valor = ui.draggable;

      if (valor.hasClass("dp4")) {
        valor.hide();
        a = parseInt($("#lab1").val());
        a = a + 1;
        a.toString();
        console.log(a);

        $("#lab1").val(a);
      } else {

        attempt--;

        if (attempt == 0) {
          swal({
              title: "Game over",
              text: "Tienes que estudiar mas?",
              icon: "warning",
              buttons: true,
              dangerMode: "yes",
            })
            .then((willDelete) => {
              if (willDelete) {
                window.location = "codigo.html";
              } else {
                $('div.drop').draggable("disable");
                $("#btn1").show();
                swal("ok no problema!");
              }
            });
        } else {
          swal("Esta descripción modera los criterios técnicos por la necesidad de apoyar y mantener los valores humanos.", "te quedan " + attempt + " intentos", "error");
        }
      }
      console.log("el score es " + a);

      if (a == 8) {
        swal("Ganaste felicitaciones Ingeniero", "", "success").then((value) => {
          window.location = "juego.html";
        });
      }
    }
  });
  $('.em5').droppable({
    //Ley 5
    //accept: '.dp1',

    drop: function (event, ui) {
      valor = ui.draggable;

      if (valor.hasClass("dp5")) {
        valor.hide();
        a = parseInt($("#lab1").val());
        a = a + 1;
        a.toString();
        console.log(a);

        $("#lab1").val(a);
      } else {

        attempt--;

        if (attempt == 0) {
          swal({
              title: "Game over",
              text: "Tienes que estudiar mas?",
              icon: "warning",
              buttons: true,
              dangerMode: "yes",
            })
            .then((willDelete) => {
              if (willDelete) {
                window.location = "codigo.html";
              } else {
                $('div.drop').draggable("disable");
                $("#btn1").show();
                swal("ok no problema!");
              }
            });
        } else {
          swal("Asegura la buena gestión para cualquier proyecto.", "te quedan " + attempt + " intentos", "error");
        }
      }
      console.log("el score es " + a);

      if (a == 8) {
        swal("Ganaste felicitaciones Ingeniero", "", "success").then((value) => {
          window.location = "juego.html";
        });
      }
    }
  });
  $('.em6').droppable({
    //ley 6
    //accept: '.dp1',

    drop: function (event, ui) {
      valor = ui.draggable;

      if (valor.hasClass("dp6")) {
        valor.hide();
        a = parseInt($("#lab1").val());
        a = a + 1;
        a.toString();
        console.log(a);

        $("#lab1").val(a);
      } else {

        attempt--;

        if (attempt == 0) {
          swal({
              title: "Game over",
              text: "Tienes que estudiar mas?",
              icon: "warning",
              buttons: true,
              dangerMode: "yes",
            })
            .then((willDelete) => {
              if (willDelete) {
                window.location = "codigo.html";
              } else {
                $('div.drop').draggable("disable");
                $("#btn1").show();
                swal("ok no problema!");
              }
            });
        } else {
          swal("Ayuda a desarrollar un ambiente organizacional favorable para actuar éticamente.", "te quedan " + attempt + " intentos", "error");
        }
      }
      console.log("el score es " + a);

      if (a == 8) {
        swal("Ganaste felicitaciones Ingeniero", "", "success").then((value) => {
          window.location = "juego.html";
        });
      }
    }
  });
  $('.em7').droppable({
    //Ley 7
    //accept: '.dp1',

    drop: function (event, ui) {
      valor = ui.draggable;

      if (valor.hasClass("dp7")) {
        valor.hide();
        a = parseInt($("#lab1").val());
        a = a + 1;
        a.toString();
        console.log(a);

        $("#lab1").val(a);
      } else {

        attempt--;

        if (attempt == 0) {
          swal({
              title: "Game over",
              text: "Tienes que estudiar mas?",
              icon: "warning",
              buttons: true,
              dangerMode: "yes",
            })
            .then((willDelete) => {
              if (willDelete) {
                window.location = "codigo.html";
              } else {
                $('div.drop').draggable("disable");
                $("#btn1").show();
                swal("ok no problema!");
              }
            });
        } else {
          swal("Reconoce completamente el trabajo de otros y abstenerse de atribuirse méritos indebidos.", "te quedan " + attempt + " intentos", "error");
        }
      }
      console.log("el score es " + a);

      if (a == 8) {
        swal("Ganaste felicitaciones Ingeniero", "", "success").then((value) => {
          window.location = "juego.html";
        });
      }
    }
  });
  $('.em8').droppable({
    //Ley 8
    //accept: '.dp1',

    drop: function (event, ui) {
      valor = ui.draggable;

      if (valor.hasClass("dp8")) {
        valor.hide();
        a = parseInt($("#lab1").val());
        a = a + 1;
        a.toString();
        console.log(a);

        $("#lab1").val(a);
      } else {

        attempt--;

        if (attempt == 0) {
          swal({
              title: "Game over",
              text: "Tienes que estudiar mas?",
              icon: "warning",
              buttons: true,
              dangerMode: "yes",
            })
            .then((willDelete) => {
              if (willDelete) {
                window.location = "codigo.html";
              } else {
                $('div.drop').draggable("disable");
                $("#btn1").show();
                swal("ok no problema!");
              }
            });
        } else {
          swal("Mejora su conocimiento, habilidades y comprensión, para aportar de manera significativa a cualquier tipo de software.", "te quedan " + attempt + " intentos", "error");
        }
      }
      console.log("el score es " + a);

      if (a == 8) {
        swal("Ganaste felicitaciones Ingeniero", "", "success").then((value) => {
          window.location = "juego.html";
        });
      }
    }
  });
});