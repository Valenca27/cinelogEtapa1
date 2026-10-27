function renderizar() {
    const grilla = document.getElementById('resultadoBusqueda');
    grilla.innerHTML = ''; 

    grilla.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm arte">
                <div class="card-body">
                    <img src="${datos.Poster}" class="card-img-top mb-1" alt="${datos.Titlle}">
                    <h5 class="card-title fw-bold">${datos.Title}</h5>
                    <p class="card-text small mb-1">Director: ${datos.Director}</p>
                    <p class="card-text small mb-1">Año de lanzamiento: ${datos.Year}</p>
                    <p class="card-text small mb-1">Duración: ${datos.Runtime}</p>
                    <p class="card-text small mb-1">Género: ${datos.Genre}</p>
                    <p class="card-text small mb-1">Actores: ${datos.Actors}</p>
                    <p class="card-text">${datos.Plot}</p>
                </div>
            </div>
        </div>
        `
};