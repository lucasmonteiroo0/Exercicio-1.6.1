//chamada api
function execRequisicaoAJAX(method, url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.onload = () => callback(xhr.responseText)
    xhr.open(method, url)
    xhr.send()
  }
  
execRequisicaoAJAX('GET', 'https://api.imgflip.com/get_memes', (response) => {
    
    objeto = JSON.parse(response)
    objetos = objeto.data.memes
    exibirMemes(objetos);

});

//selecao de elementos
const inserirMemes = document.querySelector('#tabela');
const botao_embaralhar = document.querySelector('#botao_embaralhar');

//Funcoes
function exibirMemes(listaDeMemes){
    listaDeMemes.forEach(objeto => {
        inserirMemes.innerHTML += `
    <tr>
        <td><img src="${objeto.url}" id="image"></td>
        <td id="title">${objeto.name}</td>
        <td id="link"><a href="${objeto.url}">${objeto.url}</a></td>
        <td id="width">${objeto.width}</td>
        <td id="height">${objeto.height}</td>
    </tr>`
    })
}

//eventos

botao_embaralhar.addEventListener('click', (e) =>{
    e.preventDefault();


    inserirMemes.innerHTML = "";
    objetos.sort(function() { return 0.5 - Math.random ();});
    console.table(objetos);
    exibirMemes(objetos);
});

