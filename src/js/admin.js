import { arbolPeli } from './arbolAVL/arbolAVL.js'
import { pelicula } from './peliculas.js'
import { listaCli } from './listaClientes/listaClientes.js'
import { cliente } from './cliente.js'
import { arbolActor } from './arbolBinario/arbolActores.js'
import { autor } from './actor.js'
import { hashCate } from './hashCategorias/hash.js'
import { listagraficar } from './hashCategorias/listaCategorias.js'
import { Categoria } from './Categoria.js'
import { listaPeli } from './arbolAVL/listaPeliculas.js'
import { listaComentarios } from './listaComents/listaComentarios.js'
document.getElementById('enviarPeli').addEventListener("click", loadPeli, false);
document.getElementById('enviarCliente').addEventListener("click", loadCliente, false);
document.getElementById('enviarUser').addEventListener("click", loadActor, false);
document.getElementById('enviarCate').addEventListener("click", loadCategoria, false);
document.getElementById('logout').addEventListener("click", logout, false);
document.getElementById('logoutUser').addEventListener("click", logoutDos, false);
document.getElementById('Uno').addEventListener("click", movUno, false);
document.getElementById('Dos').addEventListener("click", movDos, false);
document.getElementById('Tres').addEventListener("click", movTres, false);
document.getElementById('Cuatro').addEventListener("click", movCuatro, false);
document.getElementById('dwUno').addEventListener("click", dwUno, false);
document.getElementById('dwDos').addEventListener("click", dwDos, false);
document.getElementById('dwTres').addEventListener("click", dwTres, false);
document.getElementById('dwCuatro').addEventListener("click", dwCuatro, false);
document.getElementById('alfa').addEventListener("click", peliAlfa, false);
document.getElementById('Antialfa').addEventListener("click", peliInAlfa, false);
document.getElementById('inOrden').addEventListener("click", grafUno, false);
document.getElementById('preOrden').addEventListener("click", grafDos, false);
document.getElementById('postOrden').addEventListener("click", grafTres, false);







// Pelicula--------------------------------------------------------------------------
function loadPeli() {
    var input, file, fr;
    input = document.getElementById('filePeli');
    if (!input) {
        alert("No hay documento");
    }
    else if (!input.files) {
        alert("Tu navegador no sirve");
    }
    else if (!input.files[0]) {
        alert("Selecciona algun archivo");
    }
    else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedText;
        fr.readAsText(file);
    }
}
function receivedText(e) {
    let lines = e.target.result;
    var newArr = JSON.parse(lines);
    crearPeli(newArr)
    $("#carga-peliculas").modal("hide");
    alert("Documento Subido")
}
function crearPeli(archivo) {
    // console.log("XDDD")
    for (let x of archivo) {
        var peliNew = new pelicula(x.id_pelicula, x.nombre_pelicula, x.descripcion, x.puntuacion_star, x.precio_Q)
        var lili = new listaComentarios()
        peliNew.settCategorias(lili)
        listaPeli.insertar(peliNew)
        arbolPeli.insertar(peliNew)
    }
    arbolPeli.generarDot()
}

function peliAlfa() {
    listaPeli.metodoUno()
}
function peliInAlfa() {
    listaPeli.metodoDOs()
}
// Cliente------------------------------------------------------------------------------
function loadCliente() {
    var input, file, fr;
    input = document.getElementById('fleClientes');
    if (!input) {
        alert("No hay documento");
    }
    else if (!input.files) {
        alert("Tu navegador no sirve");
    }
    else if (!input.files[0]) {
        alert("Selecciona algun archivo");
    }
    else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedTextDos;
        fr.readAsText(file);
    }
}
function receivedTextDos(e) {
    let lines = e.target.result;
    var newArr = JSON.parse(lines);
    crearCliente(newArr)
    $("#carga-clientes").modal("hide");
    alert("Documento Subido")
}
function crearCliente(archivo) {
    // console.log("XXXD")
    for (let x of archivo) {
        var userNew = new cliente(x.dpi, x.nombre_completo, x.nombre_usuario, x.correo, x.contrasenia, x.telefono)
        listaCli.insertar(userNew)
    }
    listaCli.graficar()
    // listaAdmins.recorrer()
    // console.log("---------------------------------------------------")
    // listaUsuarios.recorrer()
    // listaUsuarios.graficarAdmin()
}

window.verPeli = function verPeli(index) {
    listaPeli.verPeli(index)
}
window.cambiarValoracion = function cambiarValoracion(index) {
    var uno = index
    var dos = String(document.getElementById(index).value)
    if (dos >= 0 && dos <= 5) {
        listaPeli.cambiarValo(uno, dos)
    } else {
        alert("Esa calificacion no es valida")
    }

}
window.comentar = function comentar(index) {
    var blabla = "coment" + index
    var dos = String(document.getElementById(blabla).value)
    var userEncontrado = localStorage.getItem('user');
    var blax = userEncontrado + ": " + dos
    if (blabla != "") {
        listaPeli.comentar(index, blax)
    } else {
        alert("Esa comentario no es valido")
    }

}
window.comprarPeli = function comprarPeli(index) {
    listaPeli.comprar(index)

}

// Actro---------------------------------------------------------------------------------
function loadActor() {
    var input, file, fr;
    input = document.getElementById('fileActores');
    if (!input) {
        alert("No hay documento");
    }
    else if (!input.files) {
        alert("Tu navegador no sirve");
    }
    else if (!input.files[0]) {
        alert("Selecciona algun archivo");
    }
    else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedTextTres;
        fr.readAsText(file);
    }
}
function receivedTextTres(e) {
    let lines = e.target.result;
    var newArr = JSON.parse(lines);
    crearActor(newArr)
    $("#carga-actores").modal("hide");
    alert("Documento Subido")
}
function crearActor(archivo) {
    // console.log("XXDD")
    for (let x of archivo) {
        var userNew = new autor(x.dni, x.nombre_actor, x.correo, x.descripcion)
        arbolActor.insertar(userNew)
    }
    arbolActor.generarDot()
    arbolActor.metodos()
    // listaAdmins.recorrer()
    // console.log("---------------------------------------------------")
    // listaUsuarios.recorrer()
    // listaUsuarios.graficarAdmin()
}
function grafUno() {
    arbolActor.grafInOr();
}
function grafDos() {
    arbolActor.grafPreOr()
}
function grafTres() {
    arbolActor.grafPostOr()
}
// Categoria ----------------------------------------------------------------
function loadCategoria() {
    var input, file, fr;
    input = document.getElementById('fileCate');
    if (!input) {
        alert("No hay documento");
    }
    else if (!input.files) {
        alert("Tu navegador no sirve");
    }
    else if (!input.files[0]) {
        alert("Selecciona algun archivo");
    }
    else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedTextCua;
        fr.readAsText(file);
    }
}
function receivedTextCua(e) {
    let lines = e.target.result;
    var newArr = JSON.parse(lines);
    crearCate(newArr)
    $("#carga-categorias").modal("hide");
    alert("Documento Subido")
}
function crearCate(archivo) {
    // console.log("XD")
    for (let x of archivo) {
        var userNew = new Categoria(x.id_categoria, x.company)
        listagraficar.insertar(userNew)
        var modulex = (x.id_categoria % 20)
        var listaUno = hashCate.buscador(modulex)
        listaUno.insertar(userNew)
    }
    hashCate.graficarAdmin()
    listagraficar.graficarDos()
    // 
    // listaAdmins.recorrer()
    // console.log("---------------------------------------------------")
    // listaUsuarios.recorrer()
    // listaUsuarios.graficarAdmin()
}

// sdfghjkp{}
function logout() {
    document.getElementById("adminDiv").style.display = "None"
    document.getElementById("loginDiv").style.display = "block"
}
function logoutDos() {
    document.getElementById("userDiv").style.display = "None"
    document.getElementById("loginDiv").style.display = "block"
    localStorage.removeItem('user');
}


function movUno() {
    document.getElementById("divScrolUno").style.display = "block"
    document.getElementById("divScrolDos").style.display = "None"
    document.getElementById("divScrolTres").style.display = "None"
    document.getElementById("divScrolCuatro").style.display = "None"
    // dfghjklñ{dfghjklñ{fghjklñ}}
    // html2canvas($('#divScrolUno')[0]).then(function (canvas) {
    //     return Canvas2Image.saveAsPNG(canvas);
    //     $(".response").append(canvas);
    // });
    // dfghjklñdfghjklñfghjklfghjk
}
function movDos() {
    document.getElementById("divScrolUno").style.display = "None"
    document.getElementById("divScrolDos").style.display = "block"
    document.getElementById("divScrolTres").style.display = "None"
    document.getElementById("divScrolCuatro").style.display = "None"
}
function movTres() {
    document.getElementById("divScrolUno").style.display = "None"
    document.getElementById("divScrolDos").style.display = "None"
    document.getElementById("divScrolTres").style.display = "block"
    document.getElementById("divScrolCuatro").style.display = "None"
}
function movCuatro() {
    document.getElementById("divScrolUno").style.display = "None"
    document.getElementById("divScrolDos").style.display = "None"
    document.getElementById("divScrolTres").style.display = "None"
    document.getElementById("divScrolCuatro").style.display = "block"
}

function dwUno() {
    html2canvas($('#divScrolUno')[0]).then(function (canvas) {
        $(".response").append(canvas);
        return Canvas2Image.saveAsPNG(canvas);
    });
}
function dwDos() {
    html2canvas($('#divScrolDos')[0]).then(function (canvas) {
        $(".response").append(canvas);
        return Canvas2Image.saveAsPNG(canvas);
        $(".response").append(canvas);
    });
}
function dwTres() {
    html2canvas($('#divScrolTres')[0]).then(function (canvas) {
        $(".response").append(canvas);
        return Canvas2Image.saveAsPNG(canvas);
        $(".response").append(canvas);
    });
}
function dwCuatro() {
    html2canvas($('#divScrolCuatro')[0]).then(function (canvas) {
        $(".response").append(canvas);
        return Canvas2Image.saveAsPNG(canvas);
        $(".response").append(canvas);
    });
}