// Seção dos Cards

let todosOsCards = "";

function cadastrarProblema() {
    let endereco = document.getElementById("endereco").value;
    let gravidade = document.getElementById("gravidade").value;
    let descricao = document.getElementById("descricao").value;

    // validacao simples
    if (endereco === "" || gravidade === "" || descricao === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Criação do card
    todosOsCards += `
    <div class='card ${gravidade}'>
        <h3>Endereço: ${endereco}</h3>
        <p><strong>Gravidade:</strong> ${gravidade}</p>
        <p><strong>Descrição:</strong> ${descricao}</p>
        <hr>
    </div>
`;

    //mostrar os cards na tela

    document.getElementById("lista-cadastros").innerHTML = todosOsCards;
    
    // Limpar os campos do formulário
    document.getElementById("endereco").value = "";
    document.getElementById("gravidade").value = "";
    document.getElementById("descricao").value = "";
}

// Seção do Slideshow

const imagens = [
      "src/assets/imgs/ImagemBuraco.jpg",
      "src/assets/imgs/LimpandoLixos.jpg",
      "src/assets/imgs/iluminacao-urbana.jpg",
      "src/assets/imgs/arborizacao.jfif",
    ];

    let indice = 0;

    function mostrarSlide() {
      document.getElementById("imagem").src = imagens[indice];
    }

    function proximoSlide() {
      indice++;

      if (indice >= imagens.length) {
        indice = 0;
      }

      mostrarSlide();
    }

    function voltarSlide() {
      indice--;

      if (indice < 0) {
        indice = imagens.length - 1;
      }

      mostrarSlide();
    }