const btnLogin = document.getElementById("btn-login");
const email = document.getElementById("email");
const senha = document.getElementById("password");

btnLogin.addEventListener("click", function() {
  if (email.value === "tryber@teste.com" && senha.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos."); 
  }
});