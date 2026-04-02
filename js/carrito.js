class ItemCarrito {
    constructor(producto, cantidad = 1) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const existente = carrito.find(item => item.producto.id === id);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push(new ItemCarrito(producto));
    }

    guardarCarrito();
    actualizarCarrito();
    mostrarMensaje("Producto añadido");
}

function cambiarCantidad(index, cambio) {
    carrito[index].cantidad += cambio;

    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }

    guardarCarrito();
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("carrito");
    const totalSpan = document.getElementById("total");
    const contador = document.getElementById("contador");

    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${item.producto.nombre} (${item.cantidad}) - ${item.producto.precio * item.cantidad}€
            <div>
                <button onclick="cambiarCantidad(${index},1)">➕</button>
                <button onclick="cambiarCantidad(${index},-1)">➖</button>
            </div>
        `;

        lista.appendChild(li);
        total += item.producto.precio * item.cantidad;
    });

    totalSpan.textContent = total;
    contador.textContent = carrito.length;
}

function mostrarMensaje(texto) {
    const msg = document.createElement("div");
    msg.textContent = texto;

    Object.assign(msg.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#2ecc71",
        color: "white",
        padding: "10px",
        borderRadius: "5px"
    });

    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 2000);
}
