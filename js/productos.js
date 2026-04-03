class Producto {
    constructor(id, nombre, precio, categoria, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
    }
}

const productos = [
    new Producto(1, "Teclado", 30, "perifericos","img/teclado.jpg"),
    new Producto(2, "Ratón", 20, "perifericos","img/raton.jpg"),
    new Producto(3, "Monitor", 200, "pantallas","img/monitor.jpg"),
    new Producto(4, "Portátil", 800, "ordenadores","img/portatil.jpg")
];