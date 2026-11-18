const questoes = [
  {
    pergunta: "Segundo o texto, os clientes mantinham uma relação de dependência com famílias poderosas. Essa relação pode ser melhor caracterizada como:",
    opcoes: [
      "Uma parceria econômica entre iguais, baseada em contratos de trabalho assalariado.",
      "Uma troca em que a proteção recebida era retribuída com apoio e serviços.",
      "Uma condição de escravidão, em que o cliente perdia totalmente a liberdade.",
      "Uma forma de cidadania plena, que garantia participação nas magistraturas.",
      "Um vínculo de parentesco entre famílias patrícias e plebeias, sem obrigações mútuas."
    ],
    correta: 1
  },
  {
    pergunta: "O texto afirma que \"esses grupos não tinham exatamente a mesma posição em todos os períodos da história de Roma\". Essa observação indica que a organização social romana:",
    opcoes: [
      "Era estática, mantendo os mesmos papéis sociais por toda a história da cidade.",
      "Era definida apenas pela origem étnica, sem alterações ao longo dos séculos.",
      "Dependia exclusivamente das conquistas militares, que não alteravam a sociedade.",
      "Transformava-se ao longo do tempo, com mudanças na posição dos grupos sociais.",
      "Tornou-se igualitária logo após a Lei das Doze Tábuas."
    ],
    correta: 3
  },
  {
    pergunta: "Os plebeus formavam a maior parte da população livre, mas, durante muito tempo, tiveram menos direitos políticos que os patrícios. Essa situação mostra que as diferenças entre os grupos romanos:",
    opcoes: [
      "Decorriam apenas da riqueza individual de cada família.",
      "Foram eliminadas com a chegada dos primeiros plebeus ao Senado.",
      "Atingiam somente as pessoas escravizadas, sem afetar os cidadãos livres.",
      "Não tinham relação com a participação nas decisões da cidade.",
      "Envolviam também desigualdades jurídicas e de participação política."
    ],
    correta: 4
  },
  {
    pergunta: "No episódio de 494 a.C., conhecido como Secessão da Plebe, os plebeus se retiraram da cidade para pressionar os patrícios. Essa atitude pode ser interpretada como:",
    opcoes: [
      "Uma forma de pressão política em busca de proteção contra abusos e de maior participação.",
      "Uma tentativa de dissolver a República e instaurar uma monarquia.",
      "Uma guerra de conquista contra cidades vizinhas, como Cartago.",
      "Um pedido dos patrícios para ampliar a escravização de estrangeiros.",
      "Uma iniciativa religiosa destinada a reforçar o culto aos deuses da cidade."
    ],
    correta: 0
  },
  {
    pergunta: "Por volta de 451–450 a.C., as leis romanas passaram a ser registradas por escrito. De acordo com o texto, essa medida:",
    opcoes: [
      "Garantiu a igualdade entre patrícios e plebeus no acesso às leis.",
      "Substituiu as assembleias populares pela autoridade exclusiva dos sacerdotes.",
      "Tornou as regras mais conhecidas, sem eliminar as desigualdades entre os cidadãos.",
      "Concedeu terras públicas a todos os plebeus livres.",
      "Criou o cargo de imperador, que passou a legislar sozinho."
    ],
    correta: 2
  },
  {
    pergunta: "Por volta de 367 a.C., medidas como as Leis Licínias-Sêxtias ampliaram a possibilidade de plebeus chegarem ao consulado. Essa mudança insere-se no conjunto de:",
    opcoes: [
      "Conquistas que ampliaram a participação política dos plebeus nos cargos da República.",
      "Ações que restringiram o acesso dos plebeus às magistraturas romanas.",
      "Medidas destinadas a acabar com a escravidão em todas as províncias.",
      "Reformas que transferiram o poder consular para os clientes das famílias.",
      "Decisões que aboliram a propriedade privada da terra em Roma."
    ],
    correta: 0
  },
  {
    pergunta: "Os irmãos Tibério e Caio Graco defenderam reformas, incluindo propostas de distribuição de terras, e suas iniciativas provocaram fortes disputas políticas. Essa situação indica que:",
    opcoes: [
      "As disputas políticas se limitaram às questões religiosas da cidade.",
      "As propostas de reforma foram aceitas sem resistência pelas elites romanas.",
      "A questão da terra era um tema politicamente sensível, que gerava conflitos de poder.",
      "Os Graco defendiam a escravidão como solução para a crise agrária.",
      "A distribuição de terras já havia sido concluída antes das reformas."
    ],
    correta: 2
  },
  {
    pergunta: "O texto associa a concentração de terras ao crescimento das grandes propriedades, às guerras e ao trabalho escravizado, fatores que dificultaram a vida dos pequenos agricultores. Nesse processo, a expansão militar romana contribuiu para:",
    opcoes: [
      "Reduzir o número de pessoas escravizadas, ao libertar prisioneiros de guerra.",
      "Fortalecer a agricultura familiar, ao distribuir as terras conquistadas.",
      "Acabar com as grandes propriedades, que eram proibidas pela lei.",
      "Diminuir a importância econômica da agricultura na sociedade romana.",
      "Aumentar o trabalho escravizado e a pressão sobre os pequenos proprietários."
    ],
    correta: 4
  },
  {
    pergunta: "Um estudante afirmou que, após os conflitos sociais, todos os habitantes de Roma passaram a ter os mesmos direitos. Essa afirmação é incorreta, pois o texto indica que os conflitos:",
    opcoes: [
      "Não provocaram nenhuma mudança nas instituições romanas.",
      "Foram restritos às disputas entre clientes e pessoas escravizadas.",
      "Levaram à abolição imediata de todas as formas de escravidão.",
      "Contribuíram para mudanças políticas, mas não eliminaram as desigualdades.",
      "Resultaram na divisão de Roma entre patrícios e plebeus, em territórios distintos."
    ],
    correta: 3
  },
  {
    pergunta: "O texto informa que, inicialmente, patrícios e plebeus disputaram acesso a cargos, leis mais justas e participação nas decisões, e que, mais tarde, também ocorreram disputas entre líderes e grupos da elite. Esses dados permitem concluir que os conflitos em Roma:",
    opcoes: [
      "Se restringiam às pessoas escravizadas e aos clientes das famílias ricas.",
      "Ocorreram em diferentes níveis e grupos, inclusive dentro da própria elite.",
      "Tinham origem exclusivamente religiosa e não envolviam poder político.",
      "Envolviam apenas a oposição entre patrícios e plebeus, sem outras divisões.",
      "Cessaram com a primeira disputa entre patrícios e plebeus."
    ],
    correta: 1
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
