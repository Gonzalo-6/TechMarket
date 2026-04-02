class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}

const productos = [
    new Producto(1, "Teclado", 30, "perifericos"),
    new Producto(2, "Ratón", 20, "perifericos"),
    new Producto(3, "Monitor", 200, "pantallas"),
    new Producto(4, "Portátil", 800, "ordenadores")
];