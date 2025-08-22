var formulario = document.querySelector("#form");
// document.addEventListener("DOMContentLoaded", function () {
//   var formulario = document.querySelector("#form");

// ----------------Forms-----------------
// Corrección de funcionalidad al enviar el forms
formulario.addEventListener("submit", function (e) {
  // Se complementa a e.preventDefault
  e.preventDefault();

  // Variables - Cambio de declaración de variables
  // name
  const name = document.getElementById("name");
  // age
  const age = document.getElementById("age");
  // nacionalidad
  const nationality = document.getElementById("nationality");

  var nombre = name.value;
  var edad = age.value;
  var i = nationality.selectedIndex;
  var nacionalidad = nationality.options[i].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    name.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    age.classList.add("error");
  }

  if (nombre.length > 0
    && (edad > 18
      && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
}); // formulario.addEventListener

// ----------------Agregar invitados-----------------
function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  } // if

  // ----------------Crea la lista-----------------
  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  // ----------------Info invitado-----------------
  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = "Nombre: ";
  inputNombre.value = nombre;
  inputNombre.setAttribute("readonly", true);
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);

  // ----------------+ edad y nacionalidad-----------------
  function crearElemento(descripcion, valor) {
    var span = document.createElement("span");
    var input = document.createElement("input");
    var espacio = document.createElement("br");
    span.textContent = descripcion + ": ";
    input.value = valor;
    input.setAttribute("readonly", true);
    elementoLista.appendChild(span);
    elementoLista.appendChild(input);
    elementoLista.appendChild(espacio);
  }


  // Redundante 
  // crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  // ----------------Botón borrar invitado-----------------
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  // Línea eliminada
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  // ----------------Borrar invitado-----------------
  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  }
}
// });