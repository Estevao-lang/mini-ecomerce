// Lista de produtos com URLs de imagens reais
const produtos = [
    { 
        id: 1, 
        nome: "Camiseta", 
        preco: 49.99, 
        imagem: "https://images.unsplash.com/photo-1584101630847-894f41c2a3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
    },
    { 
        id: 2, 
        nome: "Calça Jeans", 
        preco: 89.99, 
        imagem: "https://images.unsplash.com/photo-1562157875-818bc0726f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
    },
    { 
        id: 3, 
        nome: "Tênis", 
        preco: 129.99, 
        imagem: "https://images.unsplash.com/photo-1561702852-18b88f1a7515?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
    },
    { 
        id: 4, 
        nome: "Jaqueta", 
        preco: 199.99, 
        imagem: "https://images.unsplash.com/photo-1516890490115-45ca66b8b6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
    },
];

// Variável para armazenar o carrinho
let carrinho = [];

// Selecionar elementos do DOM
const produtosDiv = document.querySelector('.products');
const carrinhoDiv = document.querySelector('.cart');
const finalizarBtn = document.querySelector('#finalizar-compra');

// Renderizar produtos
function renderizarProdutos() {
    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('product');
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;
        produtosDiv.appendChild(produtoDiv);
    });
}

// Adicionar produto ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    carrinho.push(produto);
    atualizarCarrinho();
}

// Atualizar carrinho
function atualizarCarrinho() {
    carrinhoDiv.innerHTML = '';

    if (carrinho.length === 0) {
        carrinhoDiv.innerHTML = '<p>Carrinho vazio.</p>';
        return;
    }

    carrinho.forEach((produto, index) => {
        const carrinhoItem = document.createElement('div');
        carrinhoItem.innerHTML = `
            <p>${produto.nome} - R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="removerDoCarrinho(${index})">Remover</button>
        `;
        carrinhoDiv.appendChild(carrinhoItem);
    });
}

// Remover produto do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Finalizar compra
finalizarBtn.addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    alert('Compra finalizada! Obrigado por comprar conosco.');
    carrinho = [];
    atualizarCarrinho();
});

// Inicializar
renderizarProdutos();