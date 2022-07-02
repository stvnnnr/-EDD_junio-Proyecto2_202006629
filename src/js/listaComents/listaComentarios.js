class nodo {
    constructor(objetoValor) {
        this.valor = objetoValor;
        this.siguiente = null;
    }
}

export class listaComentarios {
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
    verComents() {
        var actual = this.cabeza
        var data = ""
        while (actual != null) {
            data += `
                    <label class="text-muted mb-2">${actual.valor}</label><br>
                    `;
            actual = actual.siguiente
        }
        return data
    }
}