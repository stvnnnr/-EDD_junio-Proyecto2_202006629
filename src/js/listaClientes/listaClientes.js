class nodo {
    constructor(objetoValor) {
        this.valor = objetoValor;
        this.siguiente = null;
    }
}

export class listaClientes {
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

    graficar() {
        var codigodot = "digraph G{\nlabel=\" Clientes \";\nnode [shape=box];\n";
        var temporal = this.cabeza
        var conexiones = "";
        var nodos = "";
        var numnodo = 0;
        while (temporal != null) {
            nodos += "N" + numnodo + "[label=\"" + temporal.valor.nombre + "\" ];\n"
            if (temporal.siguiente != null) {
                var auxnum = numnodo + 1
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
            }
            temporal = temporal.siguiente
            numnodo++;
        }
        codigodot += nodos + "\n"
        codigodot += "{rank=same;\n" + conexiones + "\n}\n}"
        // console.log(codigodot)
        d3.select("#divScrolDos").graphviz()
            .width(1100)
            .height(500)
            .zoom(false)
            .fit(true)
            .renderDot(codigodot)
    }
}
export var listaCli = new listaClientes();