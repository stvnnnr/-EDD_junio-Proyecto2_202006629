
document.getElementById('log').addEventListener("click", logear, false);


function logear() {
    var user = String(document.getElementById('user').value)
    var password = String(document.getElementById('pass').value)
    var check = document.getElementById("checkbox").checked
    // if(check){
    //     alert("xd")
    // }
    if (user != "" && password != "") {
        if (user == "EDD" && password == "123") {
            if(check){
                alert("Bienvenido Administrador")
            document.getElementById("adminDiv").style.display = "block"
            document.getElementById("loginDiv").style.display = "none"
            }else{
                alert("Ese usuario no existe")
            }
        } else if (resUser == "Usuario") {
            alert("Bienvenido usuario")
            // listaUsuarios.graficarLlegando(user)
            // document.getElementById("userDiv").style.display = "block"
            // document.getElementById("loginDiv").style.display = "none"
            // localStorage.setItem("user",user);
            // document.getElementById('name-user-login').innerHTML=user
        } else if (resAdmins == "Administrador") {
            alert("Bienvenido Administrador")
            // document.getElementById("adminDiv").style.display = "block"
            // document.getElementById("loginDiv").style.display = "none"
        }else{
            alert("Usuario no encontrado")
        }
    } else {
        alert("Llena los campos papito")
    }
}

function volver() {
    listaUsuarios.grafTops()
    document.getElementById("homeDiv").style.display = "block"
    document.getElementById("loginDiv").style.display = "none"
}