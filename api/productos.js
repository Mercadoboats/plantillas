class Productos {
    constructor() {
        this.productos = []
        this.id = 0
    }    

    guardar(prod) {
        prod.id = ++this.id
        this.productos.push(prod)
    }

 
}

module.exports = Productos;
