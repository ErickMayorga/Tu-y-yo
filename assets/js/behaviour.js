function crearFiltro(nombre){
    let li = document.createElement("li");
    li.setAttribute("data-filter",".filter-" + nombre);
    document.querySelector("#portfolio-flters").appendChild(li);
}