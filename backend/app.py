# Servidor Backend do Monitor de Cotações
from flask import Flask, jsonify
from flask_cors import CORS
import requests

# Inicializa o servidor Flask
app = Flask(__name__)
CORS(app)  # Libera o acesso para o nosso futuro HTML/JS

@app.route('/api/cotacoes', methods=['GET'])
def obter_cotacoes():
    url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
    resposta = requests.get(url)
    
    if resposta.status_code == 200:
        dados = resposta.json()
        
        # Formatamos apenas as informações relevantes para a nossa tela
        cotacoes = {
            "dolar": {
                "nome": "Dólar Comercial",
                "valor": f"{float(dados['USDBRL']['bid']):.2f}",
                "variacao": dados['USDBRL']['pctChange']
            },
            "euro": {
                "nome": "Euro",
                "valor": f"{float(dados['EURBRL']['bid']):.2f}",
                "variacao": dados['EURBRL']['pctChange']
            },
            "bitcoin": {
                "nome": "Bitcoin",
                "valor": f"{float(dados['BTCBRL']['bid']):.2f}",
                "variacao": dados['BTCBRL']['pctChange']
            }
        }
        return jsonify(cotacoes) # Retorna os dados prontos para a web
    else:
        return jsonify({"erro": "Não foi possível buscar as cotações"}), 500

if __name__ == "__main__":
    # Roda o servidor na porta 5000
    app.run(debug=True, port=5000)