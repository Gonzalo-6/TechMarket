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
    new Producto(1, "Teclado", 30, "perifericos","imagenes/teclado.jpg"),
    new Producto(2, "Ratón", 20, "perifericos","imagenes/raton.jpg"),
    new Producto(3, "Monitor", 200, "pantallas","imagenes/monitor.jpg"),
    new Producto(4, "Portátil", 800, "ordenadores","imagenes/portatil.jpg")
];