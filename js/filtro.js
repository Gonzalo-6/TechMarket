function mostrarProductos(lista) {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";

    lista.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h3>${p.nombre}</h3>
            <p>${p.precio}€</p>
            <button onclick="agregarAlCarrito(${p.id})">Añadir</button>
        `;

        contenedor.appendChild(div);
    });
}

document.getElementById("filtro").addEventListener("change", function () {
    const categoria = this.value;

    if (categoria === "todos") {
        mostrarProductos(productos);
    } else {
        const filtrados = productos.filter(p => p.categoria === categoria);
        mostrarProductos(filtrados);
    }
});

function mostrarProductos(lista) {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";

    lista.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <div class="img-container">
                <img src="${p.imagen}" alt="${p.nombre}">
            </div>
            <h3>${p.nombre}</h3>
            <p>${p.precio}€</p>
            <button onclick="agregarAlCarrito(${p.id})">Añadir</button>
        `;

        contenedor.appendChild(div);
    });
}
