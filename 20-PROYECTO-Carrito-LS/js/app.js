// Variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso apretando 'Agregando curso'
    listaCursos.addEventListener('click', agregarCurso);

    //Eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);
    
    //Muestra los cursos del LocalStorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    })
    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () =>{
        articulosCarrito = []; // reseteamos el arreglo
        localStorage.clear();

        limpiarHTML(); // eliminamos todo el html
    })

}

// Funciones
function agregarCurso (e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {         //Evitar event bubling 
        const cursoSeleccionado = e.target.parentElement.parentElement;
       leerDatosCurso(cursoSeleccionado);
    }
} 

// Elimina cursos del carrito
function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        // elimina del arreglo articulosCarrtio por el data id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);

        carritoHTML(); //Iterar osbre el carrito y mostrar su HTML
    }
}

// Lee el contenido del html y extrae la informacion del curso
function leerDatosCurso(curso) {
    console.log(curso);

     //crear un objeto con el contenido del curso actual
     const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
     }

     // Revisa si un elemento ya existe en el carrito
     const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
     if(existe) {

        // Actualiza la cantidad

        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // retorna los objetos actualizados
            } else{
                return curso; //retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];

     }else {
             // agrega elementos al arreglo de carrito
                articulosCarrito = [...articulosCarrito, infoCurso];

     }


     console.log(articulosCarrito);

     carritoHTML();
}



// Muestra el carrito de compras en el HTML
function carritoHTML() {
    //limpiar html
    limpiarHTML();

    // recorre el carrito y genera el html

    articulosCarrito.forEach( curso => {
        const{imagen, titulo, precio, cantidad, id} = curso;
        console.log(curso);
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${imagen}" width="100"></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}">X</a>
        </td>

        `;

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}


//elimina los cursos del tbody
function limpiarHTML() {
    //Forma lenta
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

