function carregarCard() {
    
    var produtos = {
        produtoUm: {
            nomeProduto: "Colar",
            imagemProduto: "/assets/images/bijuterias-colarcoracao.jpg",
            descricaoProduto: "Lorem ipsum dolor sit amet.",
            precoProduto: "R$ 39,90",
        },

        produtoDois: {
            nomeProduto: "Pulseria",
            imagemProduto: "/assets/images/bijuterias-pulseira.png",
            descricaoProduto: "Lorem ipsum dolor sit amet.",
            precoProduto: "R$ 29,90",
        },

        produtoTres: {
            nomeProduto: "Anel",
            imagemProduto: "/assets/images/bijuterias-aneis.png",
            descricaoProduto: "Lorem ipsum dolor sit amet.",
            precoProduto: "R$ 19,90",
        },
    };

    let conteudoCard = document.getElementById("cards-container");
    let htmlContent = "";

    for (let card in produtos) {
        htmlContent += `
        <div class="card-prod">
            <img src="${produtos[card].imagemProduto}" alt="${produtos[card].nomeProduto}">
            <div class="card-conteudo">
                <h3 class="card-titulo">${produtos[card].nomeProduto}</h3>
                <p class="card-descricao">${produtos[card].descricaoProduto}</p>
                <div class="card-footer">
                    <span class="card-preco">${produtos[card].precoProduto}</span>
                    <button class="card-botao">Comprar</button>
                </div>
            </div>
        </div>
    `;
    }

    conteudoCard.innerHTML = htmlContent;

}

carregarCard();