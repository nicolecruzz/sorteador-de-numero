function sortear() {
    // Obtém a quantidade de números a serem sorteados do elemento HTML com o id 'quantidade' e converte para inteiro
    let quantidade = parseInt(document.getElementById('quantidade').value);
    // Obtém o valor mínimo do intervalo de sorteio do elemento HTML com o id 'de' e converte para inteiro
    let de = parseInt(document.getElementById('de').value);
    // Obtém o valor máximo do intervalo de sorteio do elemento HTML com o id 'ate' e converte para inteiro
    let ate = parseInt(document.getElementById('ate').value);

    // Cria um array vazio para armazenar os números sorteados
    let sorteados = [];
    // Variável para armazenar cada número sorteado
    let numero;

    // Loop para sortear 'quantidade' números
    for (let i = 0; i < quantidade; i++) {
        // Chama a função 'obterNumeroAleatorio' para gerar um número aleatório dentro do intervalo especificado
        numero = obterNumeroAleatorio(de, ate);
    // Loop para não repetir os números
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        // Adiciona o número sorteado ao array 'sorteados'
        sorteados.push(numero);
    }

    // Exibe os números sorteados
    let resultado = document.getElementById ('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`

}

// Função para obter um número aleatório dentro de um intervalo especificado
function obterNumeroAleatorio(min, max) {
    // Gera um número aleatório entre min e max (inclusive) e arredonda para baixo
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
