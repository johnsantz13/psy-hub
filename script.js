function log() {
    email = document.getElementById("email").value
    senha = document.getElementById("sen").value

    if (email == "admin@gmail.com" && senha == "123456") {
        alert("login válido")
        window.location.href = "./dashboard.html";
    }
    else {
        alert("campos invalidos ou vazios, Tente Novamente")
    }
}