# Monitor Financeiro & Cotações em Tempo Real

Um dashboard web interativo e moderno para acompanhamento de cotações de moedas (Dólar, Euro e Bitcoin) em tempo real, construído com uma arquitetura Full Stack unindo **Python (Flask)** no backend e **JavaScript Vanilla** no frontend.

---

##  Tecnologias Utilizadas

### **Backend**
- **Python 3**: Linguagem principal para consumo de dados e automação.
- **Flask**: Microframework para criação da API RESTful.
- **Flask-CORS**: Gerenciamento de políticas de acesso entre domínios.
- **Requests**: Biblioteca para consumo de APIs externas de mercado financeiro.

### **Frontend**
- **HTML5**: Estruturação semântica da aplicação.
- **CSS3**: Layout moderno com Flexbox, CSS Grid, variáveis e modo escuro (*Dark Mode*).
- **JavaScript (ES6+)**: Manipulação do DOM e requisições assíncronas com a `Fetch API`.

---

## ⚙️ Como Executar o Projeto Localmente

### **Pré-requisitos**
Possuir o **Python 3.x** e o **Git** instalados na sua máquina.

### **Passo a Passo**

1. **Clonar o repositório:**
```bash
   git clone https://github.com/ygordevd/monitor-cotacoes-python.git
   cd monitor-cotacoes-python
```

2. **Instalar as dependências do Python:**
```bash
   pip install requests flask flask-cors
```

3. **Iniciar o servidor Backend em Python:**
```bash
   python backend/app.py
```
   O servidor iniciará em http://127.0.0.1:5000.

4. **Abrir a Interface Web:**
   Abra o arquivo `frontend/index.html` em qualquer navegador web de sua preferência.