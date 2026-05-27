// =========================
// SWIPER 1
// =========================

var swiper1 = new Swiper(".mySwiper-1", {

    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }

});


// =========================
// SWIPER 2
// =========================

var swiper2 = new Swiper(".mySwiper-2", {

    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {

        0: {
            slidesPerView: 1,
        },

        520: {
            slidesPerView: 2,
        },

        950: {
            slidesPerView: 3,
        }

    }

});


// =========================
// SWIPER 3
// =========================

var swiper3 = new Swiper(".mySwiper-3", {

    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {

        0: {
            slidesPerView: 1,
        },

        520: {
            slidesPerView: 2,
        },

        950: {
            slidesPerView: 3,
        }

    }

});


// =========================
// CARRITO
// =========================

const carrito = document.getElementById("carrito");

const elementos1 = document.getElementById("lista-1");
const elementos2 = document.getElementById("lista-2");
const elementos3 = document.getElementById("lista-3");

const lista = document.querySelector("#lista-carrito tbody");

const vaciarCarritoBtn = document.getElementById("vaciar-carrito");


// =========================
// EVENTOS
// =========================

cargarEventListeners();

function cargarEventListeners() {

    // Agregar productos
    elementos1.addEventListener("click", comprarElemento);
    elementos2.addEventListener("click", comprarElemento);
    elementos3.addEventListener("click", comprarElemento);

    // Eliminar producto
    carrito.addEventListener("click", eliminarElemento);

    // Vaciar carrito
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

}


// =========================
// COMPRAR PRODUCTO
// =========================

function comprarElemento(e) {

    e.preventDefault();

    if (e.target.classList.contains("agregar-carrito")) {

        const elemento =
            e.target.parentElement.parentElement;

        leerDatosElemento(elemento);

    }

}


// =========================
// LEER DATOS DEL PRODUCTO
// =========================

function leerDatosElemento(elemento) {

    const infoElemento = {

        imagen: elemento.querySelector("img").src,

        titulo: elemento.querySelector("h3").textContent,

        precio: elemento.querySelector(".precio").textContent,

        id: elemento.querySelector("a").getAttribute("data-id")

    };

    insertarCarrito(infoElemento);

}


// =========================
// INSERTAR EN CARRITO
// =========================

function insertarCarrito(elemento) {

    const row = document.createElement("tr");

    row.innerHTML = `
    
        <td>
            <img src="${elemento.imagen}" width="80">
        </td>

        <td>
            ${elemento.titulo}
        </td>

        <td>
            ${elemento.precio}
        </td>

        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">
                X
            </a>
        </td>
    
    `;

    lista.appendChild(row);

}


// =========================
// ELIMINAR PRODUCTO
// =========================

function eliminarElemento(e) {

    e.preventDefault();

    if (e.target.classList.contains("borrar")) {

        const row =
            e.target.parentElement.parentElement;

        row.remove();

    }

}


// =========================
// VACIAR CARRITO
// =========================

function vaciarCarrito() {

    while (lista.firstChild) {

        lista.removeChild(lista.firstChild);

    }

    return false;

}