document.getElementById("formAdocao").addEventListener("submit", function (e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;
  let CPF = document.getElementById("CPF").value;
  let idade = document.getElementById("idade").value;
  let cidade = document.getElementById("cidade").value;

  let moradia = document.querySelector('input[name="moradia"]:checked');
  let pet = document.querySelector('input[name="pet"]:checked');
  let quintal = document.querySelector('input[name="quintal"]:checked');

  let tempo = document.getElementById("tempo").value;
  let termos = document.getElementById("termos");

  if (nome.length < 3) return alert("Nome Inválido");

  document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});