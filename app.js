function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);

  if (quantidade > (ate - de + 1)) {
      alert("Erro: A quantidade de números solicitada é maior do que o intervalo disponível.");
  } else {
      let sorteados = [];

      for (let contador = 0; contador < quantidade; contador++) {
          let numero = obterNumeroAleatorio(de, ate);
          while (sorteados.includes(numero)) {
              numero = obterNumeroAleatorio(de, ate);
          }
          sorteados.push(numero);
      }

      document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

      // Habilita o botão Reiniciar
      let botao = document.getElementById('btn-reiniciar');
      botao.classList.remove('container__botao-desabilitado');
      botao.classList.add('container__botao');
      botao.disabled = false; // Remove a desativação
  }
}


  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;



function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
      botao.classList.remove('container__botao-desabilitado');
      botao.classList.add('container__botao');
    } else {
      botao.classList.remove('container__botao')
      botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';

  // Desativa o botão novamente
  let botao = document.getElementById('btn-reiniciar');
  botao.classList.remove('container__botao');
  botao.classList.add('container__botao-desabilitado');
  botao.disabled = true; // Desativa o botão para impedir cliques
}


