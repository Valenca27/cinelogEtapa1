const BASE_URL = "https://www.omdbapi.com";
const API_KEY = "72fcb50b"; //api key propia de cada uno

// capturamos los diferentes ids del DOM
const formulario = document.getElementById("formulario");
const query = document.getElementById("busqueda");
const resultadoBusqueda = document.getElementById("resultadoBusqueda");

//variable donde voy a guardar los resultados desde la API
let datos;

// lógica y prevención del envio del formulario
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    buscar();
});

async function buscar() {
    if (!validarFormulario()) {
        return;
    }
    try {
        //sanitizar la entrada del usuario para evitar problemas con los caracteres, basicamente que el usuario no se ponga a programar en el campo
        const busqueda = query.value.trim();
        //contruir la URL de la API con la bùsqueda del usuario. el parametro t sale de la propia API, es el titulo
        const url = `${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(busqueda)}`;
        const respuesta = await fetch(url);
        if (!respuesta.ok){
            //agrego luego lògica de error
            throw new Error("Error HTTP: " + respuesta.status)
        }
        datos = await respuesta.json();
    }
    catch(error){
        console.error("No se pudo encontrar la película:", error);
    };

    formulario.reset();
    limpiarValidaciones();
    renderizar();
};


function validarFormulario() {
    limpiarValidaciones();
    //variable comando de validez
    let valido = true;
    //validar busqueda del usuario (obligatorio)
    if (busqueda.value.trim() === "") {
        busqueda.classList.add("is-invalid");
        valido = false;
    } else {
        busqueda.classList.add("is-valid");
    }
    return valido;
};

function limpiarValidaciones() {
    busqueda.classList.remove(
        "is-valid",
        "is-invalid"
    );
};



