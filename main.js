
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual o melhor time?");

    
    if (respostaTime.toLowerCase() === "qual o melhor colegio de arapongas") {
      alert("Isso mesmo! emilio de menezes!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso, para de ser burro! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
