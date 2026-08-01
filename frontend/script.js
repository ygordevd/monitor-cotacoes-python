// Função principal para buscar as cotações do nosso backend Python
async function carregarCotacoes() {
    const btn = document.getElementById('btn-atualizar');
    btn.innerText = 'Carregando...';
    btn.disabled = true;

    try {
        // Faz a chamada HTTP para o nosso servidor Flask em Python
        const resposta = await fetch('http://127.0.0.1:5000/api/cotacoes');
        
        if (!resposta.ok) {
            throw new Error('Erro ao conectar com o backend');
        }

        const dados = await resposta.json();

        // Atualiza os dados na tela (Dólar, Euro, Bitcoin)
        atualizarCard('dolar', dados.dolar);
        atualizarCard('euro', dados.euro);
        atualizarCard('bitcoin', dados.bitcoin);

        // Atualiza o horário da última consulta
        const agora = new Date();
        document.getElementById('ultima-atualizacao').innerText = 
            `Última atualização: ${agora.toLocaleTimeString('pt-BR')}`;

    } catch (erro) {
        console.error('Erro:', erro);
        alert('Não foi possível carregar as cotações. Verifique se o servidor Python (app.py) está rodando no terminal!');
    } finally {
        btn.innerHTML = '<span class="btn-icon">🔄</span> Atualizar';
        btn.disabled = false;
    }
}

// Função auxiliar para preencher o card individual e aplicar as cores de variação
function atualizarCard(idMoeda, info) {
    const elValor = document.getElementById(`valor-${idMoeda}`);
    const elVar = document.getElementById(`var-${idMoeda}`);

    elValor.innerText = info.valor;

    const variacaoNum = parseFloat(info.variacao);
    elVar.innerText = `${variacaoNum >= 0 ? '+' : ''}${info.variacao}%`;

    // Aplica cor verde para variação positiva e vermelha para negativa
    if (variacaoNum >= 0) {
        elVar.className = 'variation pos';
    } else {
        elVar.className = 'variation neg';
    }
}

// Executa a busca assim que a página é aberta pela primeira vez
document.addEventListener('DOMContentLoaded', carregarCotacoes);