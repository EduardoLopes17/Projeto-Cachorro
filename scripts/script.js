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

  if (email.includes("@")) {
    console.log("email Ok");
  } else {
    return alert("Email invalido (não contem @)");
  }

  if (telefone.replace(/\D/g, "").length < 8) {
    return alert ("Telefone invalido (contem Menos que 8 digidos)");
  } else {
    console.log("Numero Ok");
  }

  if (CPF.replace(/\D/g, "").length < 11){
    return alert ("CPF invalido (contem menos que 11 digitos)");
  } else{
    console.log("CPF Ok");
  }

  if (parseInt(idade) < 18) {
  return alert("Idade inválida! Você precisa ter pelo menos 18 anos.");
} else {
  console.log("Idade Ok");
}



  document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});
