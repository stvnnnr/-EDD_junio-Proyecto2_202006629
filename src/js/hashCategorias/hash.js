import { cabecera } from '../cabeceraHash.js'
import { listaCategorias } from './listaCategorias.js'
class nodo {
    constructor(objetoValor) {
        this.valor = objetoValor;
        this.siguiente = null;
    }
}

export class hashCategorias {
    constructor() {
        this.cabeza = null;
        this.contador = 0;
    }

    insertar(objetico) {
        if (this.cabeza == null) {
            this.cabeza = new nodo(objetico);
            this.contador = this.contador + 1;
        } else {
            var actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = new nodo(objetico);
            this.contador = this.contador + 1;
        }
    }
    buscador(id) {
        var actual = this.cabeza
        // console.log(id)
        while (actual != null) {
            if (actual.valor.id == id) {
                return actual.valor.getCategorias()
            }
            actual = actual.siguiente
        }
    }
    obtenerGraficaLibros() {
        var temporal = this.cabeza
        var texto = ""
        for (let index = 0; index < (this.contador); index++) {
            var listaLibrosUser = temporal.valor.getCategorias()
            var textoLista = listaLibrosUser.graficar(temporal.valor.id)
            texto += textoLista + "\n"
            temporal = temporal.siguiente
        }
        return (texto)
    }
    obtenerConexionLibros() {
        var temporal = this.cabeza
        var conexiones = "";
        var numnodo = 0;
        for (let index = 0; index < (this.contador); index++) {
            conexiones += "N" + numnodo + ":" + temporal.valor.id + "-> struct" + temporal.valor.id + ":" + temporal.valor.id + ";\n"
            temporal = temporal.siguiente
            numnodo++;
        }
        return (conexiones)
    }
    graficarAdmin() {
        var codigodot = "digraph G{size=\"10\";\nlabel=\" Inicio a fin \";\n node [shape=cube];\n";
        var temporal = this.cabeza
        var conexiones = "";
        var nodos = "";
        var numnodo = 0;
        for (let index = 0; index < (this.contador); index++) {
            nodos += "N" + numnodo + "[label=\"" + temporal.valor.id + "\" PORT=\"" + temporal.valor.id + "\" ];\n"
            if (temporal.siguiente != null) {
                var auxnum = numnodo + 1
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
            }
            temporal = temporal.siguiente
            numnodo++;
        }
        codigodot += nodos + "\n"
        // meto los libros de cada user
        // sdfghjxfghjklkjhgfghjkjhxchjkjhgfghjklkjhgfdfghjkjhgcxcvhjkjhgfghjhgcxcvbnbvcvbn
        codigodot += this.obtenerGraficaLibros() + "\n"
        // 
        codigodot += "{rank=same;\n" + conexiones + "\n}"
        // meto las conexiones de cada user
        codigodot += this.obtenerConexionLibros() + "\n}"
        // 
        // console.log(codigodot)
        d3.select("#divScrolCuatro").graphviz()
            .width(1100)
            .height(500)
            .zoom(false)
            .fit(true)
            .renderDot(codigodot)
    }
}
export var hashCate = new hashCategorias();
for (let i = 0; i < 20; i++) {
    var listita = new listaCategorias()
    var categoriaUno = new cabecera(i)
    categoriaUno.settCategorias(listita)
    hashCate.insertar(categoriaUno)
}