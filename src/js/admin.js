
document.getElementById('enviarPeli').addEventListener("click", loadPeli, false);
document.getElementById('enviarCliente').addEventListener("click", loadCliente, false);
document.getElementById('enviarUser').addEventListener("click", loadActor, false);
document.getElementById('enviarCate').addEventListener("click", loadCategoria, false);
document.getElementById('logout').addEventListener("click", logout, false);







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
    console.log("XDDD")
    // for (let x of archivo) {
    //     var userNew = new usuario(x.dpi, x.nombre_completo, x.nombre_usuario, x.correo, x.rol, x.contrasenia, x.telefono)
    //     var listComp = new listaCompras()
    //     userNew.setLibros(listComp)
    //     if (x.rol == "Administrador") {
    //         listaAdmins.insertar(userNew)
    //     } else {
    //         listaUsuarios.insertar(userNew)
    //     }
    // }
    // listaAdmins.recorrer()
    // console.log("---------------------------------------------------")
    // listaUsuarios.recorrer()
    // listaUsuarios.graficarAdmin()
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
    console.log("XXXD")
    // for (let x of archivo) {
    //     var userNew = new usuario(x.dpi, x.nombre_completo, x.nombre_usuario, x.correo, x.rol, x.contrasenia, x.telefono)
    //     var listComp = new listaCompras()
    //     userNew.setLibros(listComp)
    //     if (x.rol == "Administrador") {
    //         listaAdmins.insertar(userNew)
    //     } else {
    //         listaUsuarios.insertar(userNew)
    //     }
    // }
    // listaAdmins.recorrer()
    // console.log("---------------------------------------------------")
    // listaUsuarios.recorrer()
    // listaUsuarios.graficarAdmin()
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
    console.log("XXDD")
    // for (let x of archivo) {
    //     var userNew = new usuario(x.dpi, x.nombre_completo, x.nombre_usuario, x.correo, x.rol, x.contrasenia, x.telefono)
    //     var listComp = new listaCompras()
    //     userNew.setLibros(listComp)
    //     if (x.rol == "Administrador") {
    //         listaAdmins.insertar(userNew)
    //     } else {
    //         listaUsuarios.insertar(userNew)
    //     }
    // }
    // listaAdmins.recorrer()
    // console.log("---------------------------------------------------")
    // listaUsuarios.recorrer()
    // listaUsuarios.graficarAdmin()
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
    console.log("XD")
    // for (let x of archivo) {
    //     var userNew = new usuario(x.dpi, x.nombre_completo, x.nombre_usuario, x.correo, x.rol, x.contrasenia, x.telefono)
    //     var listComp = new listaCompras()
    //     userNew.setLibros(listComp)
    //     if (x.rol == "Administrador") {
    //         listaAdmins.insertar(userNew)
    //     } else {
    //         listaUsuarios.insertar(userNew)
    //     }
    // }
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