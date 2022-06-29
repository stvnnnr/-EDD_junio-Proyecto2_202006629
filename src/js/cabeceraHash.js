import { listaCategorias } from "./hashCategorias/listaCategorias.js"

export class cabecera{
    constructor(id){
        this.id=id
        this.listaCategorias = listaCategorias
    }

    settCategorias(listaLibros){
        this.listaCategorias=listaLibros
    }
    getCategorias(){
        return this.listaCategorias
    }
}