class nodo {
    constructor(objetoValor) {
        this.valor = objetoValor;
        this.siguiente = null;
    }
}

export class listaPeliculas {
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
}
export var listaPeli = new listaPeliculas();