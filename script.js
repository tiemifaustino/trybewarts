const btnLogin = document.getElementById('btn-login');
const email = document.getElementById('email');
const senha = document.getElementById('password');

function testeLogin() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', testeLogin);

/* Desabilitar o botão Source link: https://cursos.alura.com.br/forum/topico-habitar-desabilitar-botao-65202?gclid=Cj0KCQiA8vSOBhCkARIsAGdp6RTjUs8UxBi6LoAq_GBksKXT9b9KgDsQI_6GU4fbs8uL342fMSOFJIQaAnEtEALw_wcB */
const buttonSubmit = document.getElementById('submit-btn');
const checkAgreement = document.getElementById('agreement');

buttonSubmit.disabled = true;

function habilitaBotao() {
  if (checkAgreement.checked) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}

checkAgreement.addEventListener('click', habilitaBotao);
