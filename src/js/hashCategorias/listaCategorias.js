class nodo {
    constructor(objetoValor) {
        this.valor = objetoValor;
        this.siguiente = null;
    }
}

export class listaCategorias {
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
    recorrer(){
        var actual = this.cabeza
        while(actual != null){
            console.log(actual.valor.compani)
            actual = actual.siguiente
        }
    }
    graficar(user) {
        var codigodot = 'subgraph ' + user;
        codigodot += "{\nnode [shape=plaintext]\n"
        codigodot += "struct" + user + "[label=<\n<TABLE BORDER=\"0\" CELLBORDER=\"1\" CELLSPACING=\"0\">\n<TR>\n"
        if (this.cabeza != null) {
            codigodot += "<TD COLSPAN=\"3\" PORT=\"" + user + "\">" + this.cabeza.valor.compani+ "</TD>\n</TR>"
            var temporal = this.cabeza.siguiente
            if (temporal != null) {
                while (temporal != null) {
                    codigodot += "\n<TR>\n"
                    codigodot += "<TD COLSPAN=\"3\"" + ">" + temporal.valor.compani + "</TD>\n</TR>\n"
                    temporal = temporal.siguiente;
                }
            }
        } else {
            codigodot += "<TD COLSPAN=\"3\" PORT=\"" + user + "\">" + "" + "</TD>\n</TR>"
        }
        codigodot += "</TABLE>>];\n}" + "\n"
        return (codigodot)
    }  


    graficarDos() {
        var actual = this.cabeza
        var texto = ""
        var lala = document.getElementById("categoriaDiv")
        lala.innerHTML=''
        while (actual != null) {
            texto += "<div class=\"jaja\">"+actual.valor.compani+"</div>\n"
            actual = actual.siguiente;
        }
        // console.log(texto)
        lala.innerHTML = texto;
    }
}
export var listagraficar = new listaCategorias()