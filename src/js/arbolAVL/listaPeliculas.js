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
    ordenarAlfa() {
        for (let i = 0; i < this.contador + 1; i++) {
            var actualNuevo = this.cabeza
            for (let j = 0; j < (this.contador); j++) {
                if (actualNuevo.siguiente != null && actualNuevo.valor.nombre > actualNuevo.siguiente.valor.nombre) {
                    var nodoJ = actualNuevo.valor
                    var nodoJ2 = actualNuevo.siguiente.valor
                    actualNuevo.valor = nodoJ2
                    actualNuevo.siguiente.valor = nodoJ
                }
                actualNuevo = actualNuevo.siguiente
            }
        }
    }
    ordenarInAlfa() {
        for (let i = 0; i < this.contador + 1; i++) {
            var actualNuevo = this.cabeza
            for (let j = 0; j < (this.contador); j++) {
                if (actualNuevo.siguiente != null && actualNuevo.valor.nombre < actualNuevo.siguiente.valor.nombre) {
                    var nodoJ = actualNuevo.valor
                    var nodoJ2 = actualNuevo.siguiente.valor
                    actualNuevo.valor = nodoJ2
                    actualNuevo.siguiente.valor = nodoJ
                }
                actualNuevo = actualNuevo.siguiente
            }
        }
    }
    metodoUno() {
        this.ordenarAlfa()
        var actual = this.cabeza
        var table = "<table class='table shadow-sm'>";
        for (let i = 0; i < this.contador; i++) {
            table += "<tr>";
            table += `<th scope="col">
            <FONT FACE="impact" SIZE=3 COLOR="red">${actual.valor.nombre}</FONT>
             &nbsp; <FONT SIZE=2 COLOR="blue">Descripción:</FONT><FONT SIZE=1>${actual.valor.descripcion}</FONT>
        <button type="button" class="btn btn-light text-muted mr-2" 
        data-bs-toggle="modal" data-bs-target="#ver-paciente" onclick="verPeli(${actual.valor.id})"><i class="far fa-eye"></i></button>
        <button type="button" class="btn btn-light text-muted mr-2" 
        data-bs-toggle="modal" data-bs-target="#edit-paciente" onclick="comprarPeli(${actual.valor.id})"><i class="fas fa-shopping-cart"></i></button>
        <FONT SIZE=2>Precio:Q.${actual.valor.precio}.00</FONT>
        
        </th>`;
            table += "</tr>";
            actual = actual.siguiente
        }
        table += "</table>";
        $("#pelisDiv").html(table);
    }
    metodoDOs() {
        this.ordenarInAlfa()
        var actual = this.cabeza
        var table = "<table class='table shadow-sm'>";
        for (let i = 0; i < this.contador; i++) {
            table += "<tr>";
            table += `<th scope="col">
            <FONT FACE="impact" SIZE=3 COLOR="red">${actual.valor.nombre}</FONT>
             &nbsp; <FONT SIZE=2 COLOR="blue">Descripción:</FONT><FONT SIZE=1>${actual.valor.descripcion}</FONT>
        <button type="button" class="btn btn-light text-muted mr-2" 
        data-bs-toggle="modal" data-bs-target="#ver-paciente" onclick="verPeli(${actual.valor.id})"><i class="far fa-eye"></i></button>
        <button type="button" class="btn btn-light text-muted mr-2" 
        data-bs-toggle="modal" data-bs-target="#edit-paciente" onclick="comprarPeli(${actual.valor.id})"><i class="fas fa-shopping-cart"></i></button>
        <FONT SIZE=2>Precio:Q.${actual.valor.precio}.00</FONT>
        
        </th>`;
            table += "</tr>";
            actual = actual.siguiente
        }
        table += "</table>";
        $("#pelisDiv").html(table);
    } 
    verPeli(index) {
        var actual = this.cabeza
        while (actual != null) {
            if (actual.valor.id == index) {
                data = `                                    
          <label class="text-muted mb-2">Titulo: ${actual.valor.nombre}</label><br>
          <label class="text-muted mb-2">Apellido: ${actual.valor.descripcion}</label><br>
          `;
                $("#paciente-data").html(data);
            }
            actual = actual.siguiente
        }
    }
}
export var listaPeli = new listaPeliculas();