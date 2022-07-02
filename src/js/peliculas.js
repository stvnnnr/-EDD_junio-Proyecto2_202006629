import { listaComentarios } from "./listaComents/listaComentarios.js"
export class pelicula {
    constructor(id, nombre, descripcion, puntuacion, precio) {
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.puntuacion = puntuacion
        this.precio = precio
        this.rentada = false
        this.listaCategorias = listaComentarios
    }
    settCategorias(listaLibros) {
        this.listaCategorias = listaLibros
    }
    getCategorias() {
        return this.listaCategorias
    }
}