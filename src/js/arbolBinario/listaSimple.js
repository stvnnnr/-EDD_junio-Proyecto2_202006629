class nodo {
    constructor(objetoValor) {
        this.valor = objetoValor;
        this.siguiente = null;
    }
}

export class listaActores {
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
        var actual = this.cabeza
        var texto = ""
        var lala = document.getElementById("actoresDiv")
        lala.innerHTML=''
        while (actual != null) {
            const nombres = ["src/assets/img/profile.png"];
            const aleatorio = nombres[Math.floor(Math.random() * nombres.length)];
            texto += "<div class=\"card\" style=\"width: 18rem;\">\n<img class=\"card-img-top\" src=\""
            texto += aleatorio
            texto += "\" WIDTH=50 HEIGHT=50 alt=\"Card image cap\">\n<div class=\"card-body\"\n>"
            texto += "<h5 class=\"card-title\">" + actual.valor.nombre + "</h5>\n</div>\n<ul class=\"list-group list-group-flush\">\n"
            texto += "<li class=\"list-group-item\">Descripcion: " + actual.valor.descripcion + "</li>\n"
            texto += "</ul>\n</div>\n<div style=\"height:15px;\">     </div>\n"
            actual = actual.siguiente;
        }
        // console.log(texto)
        lala.innerHTML = texto;
    }
}