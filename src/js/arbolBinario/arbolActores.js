class nodo {
    constructor(autor) {
        this.autor = autor
        this.izq = null
        this.der = null
    }
}
export class abb {
    constructor() {
        this.raiz = null
    }
    insertar(autor) {
        let aux = new nodo(autor)
        if (this.raiz == null) {
            this.raiz = aux
        } else {
            this.raiz = this.insertarNodo(this.raiz, aux)
        }
    }

    devolverRaiz() {
        return this.raiz
    }

    insertarNodo(raizActual, aux) {
        if (raizActual != null) {
            if (raizActual.autor.dni > aux.autor.dni) {
                raizActual.izq = this.insertarNodo(raizActual.izq, aux)
            } else if (raizActual.autor.dni < aux.autor.dni) {
                raizActual.der = this.insertarNodo(raizActual.der, aux)
            } else {
                console.log("Ese man ya existe")
            }
            return raizActual
        } else {
            raizActual = aux
            return raizActual
        }
    }

    generarDot() {
        let cadena = "digraph arbolAutores {\n"
        cadena += this.cadenNodos(this.raiz)
        cadena += "\n"
        cadena += this.enlazar(this.raiz)
        cadena += "\n}"
        // console.log(cadena)
        d3.select("#divScrolTres").graphviz()
        .width(1100)
        .height(500)
        .zoom(false)
        .fit(true)
            .renderDot(cadena)
    }

    cadenNodos(raizActual) {
        let nodos = ""
        if (raizActual != null) {
            nodos += "n" + raizActual.autor.dni + "[label=\"" + raizActual.autor.nombre + "\"]\n"
            nodos += this.cadenNodos(raizActual.izq)
            nodos += this.cadenNodos(raizActual.der)
        }
        return nodos
    }

    enlazar(raizActual) {
        let cadena = ""
        if (raizActual != null) {
            cadena += this.enlazar(raizActual.izq)
            cadena += this.enlazar(raizActual.der)
            if (raizActual.izq != null) {
                cadena += "n" + raizActual.autor.dni + "-> n" + raizActual.izq.autor.dni + "\n"
            }
            if (raizActual.der != null) {
                cadena += "n" + raizActual.autor.dni + "-> n" + raizActual.der.autor.dni + "\n"
            }
        }
        return cadena
    }

    buscar(x) {
        var nombre = x.toLocaleLowerCase()
        var namee = nombre.replace(/ /g, "")
        var xcomp = this.buscador(this.raiz, namee)
        if (xcomp == "Existe") {
            var comp = this.buscarAutor(this.raiz, namee)
            alert("Si existe")
            return (comp)
        } else {
            alert("No existe")
            return (0)
        }
    }
    buscarAutor(raiz, b) {
        var nombrex = raiz.autor.nombre
        var nombres = nombrex.toLocaleLowerCase()
        var namees = nombres.replace(/ /g, "")
        if (raiz === null) {
            return null;
        } else if (b < namees) {
            return this.buscarAutor(raiz.izq, b);
        } else if (b > namees) {
            return this.buscarAutor(raiz.der, b);
        }
        else {
            return raiz.autor;
        }
    }

    buscador(raiz, b) {
        if (raiz != null) {
            var nombrex = raiz.autor.nombre
            var nombres = nombrex.toLocaleLowerCase()
            var namees = nombres.replace(/ /g, "")
            var x = this.buscador(raiz.izq, b)
            var y = this.buscador(raiz.der, b)
            if (namees == b || x == "Existe" || y == "Existe") {
                return ("Existe")
            }
        }
    }
}
export var arbolActor = new abb()
