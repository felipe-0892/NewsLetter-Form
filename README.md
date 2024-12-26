# 🗃 Landing Page com Formulário de Cadastro para Newsletter 🗃

![Exemplo de Formulário](image-preview.png)


Este projeto consiste em uma **Landing Page** funcional que permite aos usuários cadastrarem seus e-mails para receberem newsletters.  
O sistema foi desenvolvido utilizando tecnologias modernas no front-end para proporcionar uma experiência agradável e eficiente. Pode ser feito a integração com algum back-end que já reconheça o e-mail e ative ele numa lista de disparos de e-mails para **newsletter**.
```
landing-page-newsletter/
├── img/
│   └── astronauta.png      # Imagem
├── node_modules/
├── image-preview.png       # Preview da página
├── index.html              # Página inicial
├── package-lock.json       # Config do Bootstrap
├── package.json            # Config do Bootstrap
├── script.js               # Lógica de envio de e-mails
├── style.css               # Estilização da página
└── README.md               # Documentação do projeto VOCÊ ESTÁ AQUI :)
```

## 🛠️ Tecnologias Utilizadas 🛠️

### **Front-end**
- **HTML5**: Estruturação da página.
- **CSS3**: Estilização personalizada.
- **Bootstrap**: Layout responsivo e componentes pré-construídos.

### **Back-end**
##### **recomenda-se utilizar para o processamento de formulários e envio de e-mails.**
- **PHP** com a biblioteca de dependência Composer
- **NodeJs**:

## 📋 Funcionalidades 📋

1. **Formulário de Cadastro**:
   - Campo para inserção do nome.
   - Campo para inserção do e-mail.
   - Campo para inserção de mensagem.
   
2. **Envio de E-mail**:
   - O envio utiliza-se a versão de teste do **EmailJs**.

3. **Design Responsivo**:
   - A partir do **Bootstrap**, o design fica compatível com dispositivos móveis e desktops.

---

## ⚙️ Como Executar o Projeto ⚙️

### Pré-requisitos
- Ter uma conta no Email.js.
- Vs Code.

```
emailjs.init("PUBLIC KEY_");

//Assim que criar a conta, use a sua PUBLIC KEY_

//Na function, substitua o SERVICE_ID e o TEMPLATE_ID

//O SERVICE_ID, vai em E-mail Services, clica no seu e-mail cadastrado e procura o campo referente.
//O TEMPLATE_ID, vai em E-mail Templates, clica no seu template criado e procura o campo referente.

 emailjs.send("SERVICE_ID", "TEMPLATE_ID", {
        to_email: to,
        subject: subject,
        message: message
    })

```

## 🚀 Próximos Passos 🚀

Armazenar e-mails em um banco de dados (opcional, usando MySQL).
Implementar testes unitários no envio de e-mails de forma paga.

## 🤝 Contribuições 🤝
- Contribuições são sempre **bem-vindas**!
- Sinta-se à vontade para abrir issues ou enviar um pull request. Assim que fizer o pull, **certifique-se que colocou os arquivos alterados em uma pastinha separada com seu nome**, para ficar de forma organizada e outros desenvolvedores escolher qual tipo de ideia utilizar. :)

```
//Exemplo

landing-page-newsletter/
├── img/
│   └── astronauta.png      # Imagem
├── node_modules/
├── image-preview.png       # Preview da página
├── index.html              # Página inicial
├── package-lock.json       # Config do Bootstrap
├── package.json            # Config do Bootstrap
├── script.js               # Lógica de envio de e-mails
├── style.css               # Estilização da página
└── README.md               # Documentação do projeto VOCÊ ESTÁ AQUI :)
└── JoaoBR123/              #Alteração feita pelo usuário JoaoBR123
├──── img/
│   │  └── astronauta.png      # Imagem
|   ├── node_modules/
|   ├── image-preview.png       # Preview da página
|   ├── index.html              # Página inicial
|   ├── package-lock.json       # Config do Bootstrap
|   ├── package.json            # Config do Bootstrap
|   ├── script.js               # Lógica de envio de e-mails
|   ├── style.css               # Estilização da página
|   └── README.md               # Documentação do projeto
(DESCREVA O QUE VOCÊ ALTEROU (dentro do seu README.MD) PARA QUE O PRÓXIMO DESENVOLVEDOR SABER O QUE PODE UTILIZAR EM UM PROJETO)
```
## Se precisar de ajuda com algum ponto específico ou alteração, é só entrar em contato comigo! 😊

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/felipe-silva-a9a008201/)

1. Clone este repositório:
   ```
   https://github.com/felipe-0892/NewsLetter-Form.git
   ```
MIT License

Copyright (c) 2024 Felipe Silva

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

   É concedida permissão, gratuitamente, a qualquer pessoa que obtenha uma cópia
deste software e arquivos de documentação associados (o "Software"), para lidar
no Software sem restrições, incluindo, sem limitação, os direitos
usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender
cópias do Software e permitir que as pessoas a quem o Software é
capacitado para fazê-lo, sujeito às seguintes condições:

O aviso de direitos autorais acima e este aviso de permissão serão incluídos em todos
cópias ou partes substanciais do Software.

O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU
IMPLÍCITAS, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIALIZAÇÃO,
ADEQUAÇÃO A UM DETERMINADO FIM E NÃO VIOLAÇÃO. EM HIPÓTESE ALGUMA O
OS AUTORES OU DETENTORES DE DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER RECLAMAÇÃO, DANOS OU OUTROS
RESPONSABILIDADE, SEJA EM UMA AÇÃO DE CONTRATO, ATO ILÍCITO OU DE OUTRA FORMA, DECORRENTE DE,
FORA DE OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO
SOFTWARE.

# 🗃Obrigado ! 🗃
