const apiUrl = 'https://ecom-back-strapi.onrender.com/api/products';
const token  = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMxODk0MTE0LCJleHAiOjE3MzQ0ODYxMTR9.NhdtCmF-yI1VMcQQqlkQ6wxb5veHC7b_ur258se2qbo';

function configurarCabecalhos() {
    return {
        'Authorization': token,
        'Content-Type': 'application/json'
    };
}

async function buscarProdutos() {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: configurarCabecalhos()
        });

        if (!response.ok) {
            throw new Error('Erro na resposta da API: ' + response.status);
        }

        const data = await response.json();
        console.log('Dados recebidos da API:', data);
        return data.data;
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        return null;
    }
}

function exibirProdutos(produtos) {
    const produtosContainer = document.getElementById("cards-container-produtos");
    produtosContainer.innerHTML = '';

    let htmlContent = '';

        produtos.forEach(item => {
            const produto = item.attributes;
            const imagem = produto.imagens?.[1];
            const nome = produto.nome;
            const preco = produto.preco || 0;
            const descricao = produto.descricao;

            htmlContent += `
            <div class="card-prod">
                <img src="${imagem}" alt="${nome}" class="produto-imagem">
                <div class="card-conteudo">
                    <h2 class="card-titulo">${nome}</h2>
                    <p class="card-descricao">${descricao}</p>
                    <div class="card-footer">
                        <span class="card-preco">Preço: R$ ${preco.toFixed(2)}</span>
                        <button class="card-botao" onclick="alert('Você comprou: ${nome}')">Comprar</button>
                    </div>
                </div>
            </div>
            `;
        });

    produtosContainer.innerHTML = htmlContent;
}

(async function carregarProdutos() {
    const produtos = await buscarProdutos();
    exibirProdutos(produtos); 

})();

document.getElementById("logo").addEventListener("click", function() {
    window.location.href = "/";
});