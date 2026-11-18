const questoes = [
  {
    pergunta: "Qual grupo formava a aristocracia tradicional de Roma?",
    opcoes: ["Plebeus", "Patrícios", "Clientes", "Libertos"],
    correta: 1
  },
  {
    pergunta: "Quem eram os plebeus na sociedade romana?",
    opcoes: ["Apenas os grandes proprietários", "Pessoas escravizadas", "A maior parte da população livre", "Somente os sacerdotes"],
    correta: 2
  },
  {
    pergunta: "Qual era uma característica da condição das pessoas escravizadas?",
    opcoes: ["Tinham os mesmos direitos dos patrícios", "Não possuíam liberdade", "Podiam escolher os cônsules", "Controlavam o Senado"],
    correta: 1
  },
  {
    pergunta: "O que os plebeus buscavam durante os conflitos com os patrícios?",
    opcoes: ["Acabar com todas as cidades romanas", "Conquistar direitos e participação política", "Restaurar a monarquia", "Proibir o comércio"],
    correta: 1
  },
  {
    pergunta: "O que foi a chamada Secessão da Plebe?",
    opcoes: ["Uma campanha militar contra Cartago", "A retirada de plebeus como forma de pressão política", "A criação do Império", "Uma lei que acabou com a escravidão"],
    correta: 1
  },
  {
    pergunta: "Qual foi a importância da Lei das Doze Tábuas?",
    opcoes: ["Registrou leis por escrito", "Criou o cargo de imperador", "Deu terras a todos os cidadãos", "Acabou com as diferenças sociais"],
    correta: 0
  },
  {
    pergunta: "As Leis Licínias-Sêxtias, de 367 a.C., ficaram conhecidas por:",
    opcoes: ["Impedir plebeus de ocupar cargos", "Ampliar a possibilidade de plebeus chegarem ao consulado", "Criar a República", "Proibir a agricultura"],
    correta: 1
  },
  {
    pergunta: "Quem foram Tibério e Caio Graco?",
    opcoes: ["Generais cartagineses", "Imperadores do século I", "Irmãos que defenderam reformas sociais e agrárias", "Fundadores de Roma"],
    correta: 2
  },
  {
    pergunta: "Qual problema contribuiu para as tensões sociais no final da República?",
    opcoes: ["A ausência de conquistas territoriais", "A concentração de terras e as dificuldades dos pequenos agricultores", "O fim do comércio no Mediterrâneo", "A igualdade econômica entre todos"],
    correta: 1
  },
  {
    pergunta: "Qual afirmação resume melhor os resultados dos conflitos sociais em Roma?",
    opcoes: ["As desigualdades desapareceram completamente", "Os conflitos não provocaram nenhuma mudança", "Houve conquistas e mudanças políticas, mas as desigualdades continuaram", "Todos os habitantes passaram a ter os mesmos direitos"],
    correta: 2
  }
];

const areaPerguntas = document.getElementById("perguntas");

questoes.forEach((questao, indice) => {
  const bloco = document.createElement("section");
  bloco.className = "pergunta";
  const titulo = document.createElement("h3");
  titulo.textContent = `${indice + 1}. ${questao.pergunta}`;
  bloco.appendChild(titulo);

  questao.opcoes.forEach((opcao, i) => {
    const label = document.createElement("label");
    label.className = "opcao";
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `questao${indice}`;
    input.value = i;
    input.required = true;
    const texto = document.createElement("span");
    texto.textContent = opcao;
    label.append(input, texto);
    bloco.appendChild(label);
  });
  areaPerguntas.appendChild(bloco);
});

document.getElementById("quizForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let acertos = 0;
  questoes.forEach((questao, indice) => {
    const marcada = document.querySelector(`input[name="questao${indice}"]:checked`);
    if (marcada && Number(marcada.value) === questao.correta) {
      acertos++;
    }
  });

  const resultado = document.getElementById("resultado");
  let mensagem = "";
  if (acertos <= 4) {
    mensagem = "Continue estudando! Leia o conteúdo novamente e tente mais uma vez.";
  } else if (acertos <= 7) {
    mensagem = "Muito bem! Você já compreendeu boa parte do assunto.";
  } else {
    mensagem = "Excelente! Você demonstrou que compreendeu muito bem o tema.";
  }

  resultado.innerHTML = `<h3>Você acertou ${acertos} de ${questoes.length} questões!</h3><p>${mensagem}</p><button type="button" class="botao" id="refazer">Refazer questionário</button>`;
  resultado.classList.add("mostrar");
  resultado.scrollIntoView({ behavior: "smooth", block: "center" });

  document.getElementById("refazer").addEventListener("click", () => {
    document.getElementById("quizForm").reset();
    resultado.classList.remove("mostrar");
    resultado.innerHTML = "";
    document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
  });
});
