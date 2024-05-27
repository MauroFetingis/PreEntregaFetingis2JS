// function Calculadora{

//     const Productos = [
//         "id": 1, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 1200, "img":"./img/airpods.jpg";
//         "id": 2, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 1100, "img": "./img/appletv.jpg";
//         "id": 3, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 1200, "img": "./img/appletv2.jpg";
//         "id": 4, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 1000, "img": "./img/galaxy.jpg";
//         "id": 5, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 1200, "img": "./img/galaxy2.png";
//         "id": 6, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 900, "img": "./img/ipadA.jpg";
//         "id": 7, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 500, "img": "./img/ipadP.jpg";
//         "id": 8, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 500, "img": "./img/iphone.jpg";
//         "id": 9, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 200, "img": "./img/iphone2.jpg";
//         "id": 10, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 200, "img": "./img/iphone3.jpg";
//         "id": 11, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 2500, "img": "./img/laptop.png";
//         "id": 12, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 2200, "img": "./img/laptop2.jpg";
//         "id": 13, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 1000, "img": "./img/laptop3.png";
//         "id": 15, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 1000, "img": "./img/mac2.jpg";
//         "id": 16, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 700, "img": "./img/macA.jpg";
//         "id": 17, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 700, "img": "./img/macP.jpg";
//         "id": 18, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 700, "img": "./img/pixel7.jpg";
//         "id": 19, "class": "articulo", "nombre": "articulo de tienda de celulares", "cantidad": 1, "desc": "articulo de tienda de celulares", "precio": 700, "img": "./img/watch.jpg";   
//     ]
// }
// Calculadora()
// var listaObjetos = [];


// var listaObjetos = [];


// function agregarObjeto() {
//   var objeto = prompt("Ingrese el nombre del objeto que desea publicar:");
//   listaObjetos.push(objeto);
// }


// function publicarObjetos() {
//   var continuar = true;
  
//   while (continuar) {
//     var opcion = prompt("¿Desea agregar un objeto más? (si/no)").toLowerCase();
    
//     if (opcion === "si") {
//       agregarObjeto();
//     } else if (opcion === "no") {
//       continuar = false;
//     } else {
//       alert("Opción no válida. Por favor, ingrese 'si' o 'no'.");
//     }
//   }


//   var listaHtml = document.getElementById("listaObjetos");
//   listaHtml.innerHTML = "";

//   listaObjetos.forEach(function(objeto, index) {
//     var listItem = document.createElement("li");
//     listItem.textContent = (index + 1) + ". " + objeto;
//     listaHtml.appendChild(listItem);
//   });
// }
const precioTotal = document.getElementById('precioFinal')
const productosAgregados = [];
let totalCompra = 0
let refresh = document.getElementById("refresh");
refresh.addEventListener("click", _ => {location.reload();
})
const pagar = document.getElementById("pagar");
pagar.addEventListener("click", _ => {
    const confirmacion = confirm("¿Desea finalizar su compra?");
    if (confirmacion){ alert("Gracias por elegirnos!");
    location.reload()
    }
    
})



        function agregarProducto(id) {
            const confirmacion = confirm("¿Deseas agregar este producto a la lista?");
            if (confirmacion) {
                productosAgregados.push(id);
                mostrarProductos();
            }
        }

        function mostrarProductos() {
            const lista = document.getElementById('listaProductos');
            lista.innerHTML = '';
            productosAgregados.forEach(id => {
                const item = document.createElement('li');
                item.textContent = id;
                lista.appendChild(item);
            });
        }

