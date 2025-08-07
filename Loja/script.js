let produtos

window.onload = function(){
    var storedUser = localStorage.getItem("usuario")
    var user = JSON.parse(storedUser)

    document.getElementById("user").innerText = user.name
    document.getElementById("perfil").innerText = user.dataEntrada
    document.getElementById("idPerfil").innerText = user.id

}


