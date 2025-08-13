let produtos;

window.onload = function () {
    var storedUser = localStorage.getItem("usuario");
    var user = JSON.parse(storedUser);

    document.getElementById("user").innerText = user.name;
    document.getElementById("perfil").innerText = user.dataEntrada;
    document.getElementById("idPerfil").innerText = user.id;
};

document.addEventListener("DOMContentLoaded", function () {
    fetch('../Dados/mock.json')
        .then((response) => response.json())
        .then((data) => {
            produtos = data;

            const produtosContainer = document.getElementById('produtos-container');
            produtos.forEach((produtos, index) => {

                const card = document.createElement('div');
                card.className = 'card';
                card.style.width = '18rem';
                card.style.marginRight = '10px';

                const imagem = document.createElement('img');
                imagem.src = produtos.imagem;
                imagem.className = 'card-img-top';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.textContent = produtos.descricao;

                const cardText = document.createElement('p');
                cardText.textContent = 'Preço: $' + produtos.preco.toFixed(2);

                const btnAdicionarAoCarrinho = document.createElement('a');
                btnAdicionarAoCarrinho.href = '#';
                btnAdicionarAoCarrinho.className = 'btn btn-primary btn-adicionar-ao-carrinho';
                btnAdicionarAoCarrinho.textContent = 'Adicionar ao carrinho';
                btnAdicionarAoCarrinho.setAttribute('data-indice', index);

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(btnAdicionarAoCarrinho);

                card.appendChild(imagem);
                card.appendChild(cardBody);

                produtosContainer.appendChild(card);
            });
        })
        .catch((error) => console.error('Erro ao carregar dados', error));

        $('#produtos-container').on('click', '.btn-adicionar-ao-carrinho', function(){
            const indexDoProduto = $(this).data("indice")
            const produtoSelecionado = produtos[indexDoProduto]

            let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []

            carrinho.push(produtoSelecionado)
            localStorage.setItem("carrinho", JSON.stringify(carrinho))

            alert("Produto adicionado com sucesso")
        })
        
});
