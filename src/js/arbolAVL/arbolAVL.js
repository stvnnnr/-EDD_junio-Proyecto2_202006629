class nodo {
    constructor(dato) {
        this.dato = dato;
        this.izquierda = null;
        this.der = null;
        this.altura = 0;
    }
}

class avl {
    constructor() {
        this.raiz = null;
    }

    insertar(valor) {
        let nuevo = new nodo(valor);
        if (this.raiz == null) {
            this.raiz = nuevo;
        } else {
            this.raiz = this.insertar_nodo(this.raiz, nuevo);
        }
    }

    insertar_nodo(raiz_actual, nuevo) {
        if (raiz_actual != null) {
            if (raiz_actual.dato.id > nuevo.dato.id) {
                raiz_actual.izquierda = this.insertar_nodo(raiz_actual.izquierda, nuevo);
                if (this.altura(raiz_actual.der) - this.altura(raiz_actual.izquierda) == -2) {
                    if (nuevo.dato.id < raiz_actual.izquierda.dato.id) {
                        raiz_actual = this.r_izquierda(raiz_actual);
                    } else {
                        raiz_actual = this.r_izquierda_der(raiz_actual);
                    }
                }
            } else if (raiz_actual.dato.id < nuevo.dato.id) {
                raiz_actual.der = this.insertar_nodo(raiz_actual.der, nuevo);
                if (this.altura(raiz_actual.der) - this.altura(raiz_actual.izquierda) == 2) {
                    if (nuevo.dato.id > raiz_actual.der.dato.id) {
                        raiz_actual = this.r_derecha(raiz_actual);
                    } else {
                        raiz_actual = this.r_der_izquierda(raiz_actual);
                    }
                }
            } else {
                console.log("NO SE PUEDE INSERTAR EL DATO PORQUE YA EXISTE");
            }
            raiz_actual.altura = this.altura_maxima(this.altura(raiz_actual.der), this.altura(raiz_actual.izquierda)) + 1;
            return raiz_actual;
        } else {
            raiz_actual = nuevo;
            return raiz_actual;
        }
    }

    altura(nodo) {
        if (nodo != null) {
            return nodo.altura;
        } else {
            return -1;
        }
    }

    altura_maxima(h1, h2) {
        if (h2 >= h1) {
            return h2;
        } else {
            return h1;
        }

    }
    r_izquierda(nodo) {
        let aux = nodo.izquierda;
        nodo.izquierda = aux.der;
        aux.der = nodo;
        nodo.altura = this.altura_maxima(this.altura(nodo.der), this.altura(nodo.izquierda)) + 1;
        aux.altura = this.altura_maxima(nodo.altura.altura, this.altura(nodo.izquierda)) + 1;
        return aux;
    }
    r_derecha(nodo) {
        let aux = nodo.der;
        nodo.der = aux.izquierda;
        aux.izquierda = nodo;
        nodo.altura = this.altura_maxima(this.altura(nodo.izquierda), this.altura(nodo.der)) + 1;
        aux.altura = this.altura_maxima(nodo.altura.altura, this.altura(nodo.der)) + 1;
        return aux;
    }

    r_izquierda_der(nodo) {
        nodo.izquierda = this.r_derecha(nodo.izquierda);
        let aux = this.r_izquierda(nodo);
        return aux;
    }

    r_der_izquierda(nodo) {
        nodo.der = this.r_izquierda(nodo.der);
        let aux = this.r_derecha(nodo);
        return aux;
    }

    preorden(raiz_actual) {
        if (raiz_actual != null) {
            console.log(raiz_actual.dato);
            this.preorden(raiz_actual.izquierda);
            this.preorden(raiz_actual.der);
        }
    }

    inOrden(raiz_actual) {
        if (raiz_actual != null) {
            this.inOrden(raiz_actual.izquierda);
            console.log(raiz_actual.dato);
            console.log("altura= " + (this.altura(raiz_actual.der) - this.altura(raiz_actual.iz)))
            this.inOrden(raiz_actual.der);
        }
    }

    postOrden(raiz_actual) {
        if (raiz_actual != null) {
            this.postOrden(raiz_actual.izquierda);
            this.postOrden(raiz_actual.der);
            console.log(raiz_actual.dato);
        }
    }

    generarDot() {
        let cadena = "digraph arbol {\n" + "node [shape = record, color=black , style=filled, fillcolor=olivedrab2];\n" + 'edge[arrowhead = icurve color="chocolate4" penwidth="1.5"];\n';
        cadena += this.generar_nodos(this.raiz);
        cadena += "\n";
        cadena += this.enlazar(this.raiz);
        cadena += "\n}";
        d3.select("#divScrolUno").graphviz()
            .width(700)
            .height(1400)
            .renderDot(cadena)
    }

    generar_nodos(raiz_actual) {
        let nodos = "";
        if (raiz_actual != null) {
            nodos += "n" + raiz_actual.dato.id + " [ label =\"<C0>|" + raiz_actual.dato.nombre + "|<C1>\"];\n";
            nodos += this.generar_nodos(raiz_actual.izquierda);
            nodos += this.generar_nodos(raiz_actual.der);
        }
        return nodos;
    }
    enlazar(raiz_actual) {
        let cadena = "";
        if (raiz_actual != null) {
            cadena += this.enlazar(raiz_actual.izquierda);
            cadena += this.enlazar(raiz_actual.der);
            if (raiz_actual.izquierda != null) {
                cadena += "n" + raiz_actual.dato.id + "-> n" + raiz_actual.izquierda.dato.id + "\n";
            }
            if (raiz_actual.der != null) {
                cadena += "n" + raiz_actual.dato.id + "-> n" + raiz_actual.der.dato.id + "\n";
            }
        }
        return cadena;
    }
}

export var arbolPeli = new avl();