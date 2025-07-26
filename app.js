let listaDeAmigosAdicionados = []


// Pegar valor do input

function adicionarAmigo() {
    let amigo = document.getElementById('amigo')

    if (amigo.value === '') {
        alert('Por favor, insira um nome.')
    } else {
        listaDeAmigosAdicionados.push(amigo.value)
        console.log(listaDeAmigosAdicionados)

        // Limpa o conteúdo do input
        amigo.value = ''

        // Adiciona nome no html
        let listaUl = document.getElementById('listaAmigos');
        // Garante que não haja duplicados ao atualizar.
        listaUl.innerHTML = '';
        document.getElementById('resultado').innerHTML = '';

        for (let index = 0; index < listaDeAmigosAdicionados.length; index++) {
            const amigo = listaDeAmigosAdicionados[index];
            let amigoLi = document.createElement('li');
            amigoLi.innerText = amigo
            listaUl.appendChild(amigoLi)
        }
    }
}



/*
Escreva uma função que selecione aleatoriamente um dos nomes armazenados no array amigos.

Use Math.random() e Math.floor() para obter um índice aleatório.

*/

function sortearAmigo() {
    let listaSize = listaDeAmigosAdicionados.length;
    if (listaSize > 0) {

        let indexAleatorio = parseInt(Math.random() * listaSize)
        let amigoSorteado = listaDeAmigosAdicionados[indexAleatorio]
        let amigoSorteadoElement = document.createElement('li');
        amigoSorteadoElement.innerText = `O amigo sorteado foi: ${amigoSorteado}!🥳`


        let resultado = document.getElementById('resultado');

        resultado.appendChild(amigoSorteadoElement)
        // Reseta lista para proximo sorteio
        listaDeAmigosAdicionados = []
    } else {
        alert('Não há nomes para serem sorteados')

    }
}