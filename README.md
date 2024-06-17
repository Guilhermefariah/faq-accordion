# Acordeão FAQ

Este projeto demonstra uma funcionalidade simples de FAQ em estilo acordeão usando HTML, CSS e JavaScript. O efeito acordeão permite aos usuários expandir e recolher seções de conteúdo ao clicar nas perguntas.

![texto alternativo](/FAQ.jpeg)

## Funcionalidades
* Design responsivo
* eção de FAQ em estilo acordeão
* Animações de transição suave
* Clique para expandir/recolher perguntas
* Ícones únicos para os estados expandido e recolhido

## Tecnologias Utilizadas
* HTML5
* CSS3
* JavaScript

## Configuração e Uso
### Pré-requisitos
* Um navegador web (por exemplo, Google Chrome, Mozilla Firefox)

* Um editor de código (opcional, para personalização)

## Instalação

### Clone o repositório

```sh
git clone https://github.com/seuusuario/ex6-acordeao-faq.git

cd ex6-acordeao-faq
```
Abra o arquivo <strong>index.html</strong> no seu navegador preferido:

```sh
open index.html
```

## Estrutura de Arquivos

```sh
acordeao-faq/
│
├── index.html       # Arquivo HTML principal
├── style.css        # Estilos CSS
├── index.js         # Funcionalidade JavaScript
├── imagem.png       # Imagem exibida na página
├── icone.png        # Ícone usado para o estado recolhido
└── seta aberta.png  # Ícone usado para o estado expandido
```

## Explicação do Código

### HTML (index.html)
O arquivo HTML contém a estrutura da seção de FAQ com perguntas e respostas. Cada pergunta tem um ícone único para indicar seu estado (expandido ou recolhido).

### CSS (style.css)
O arquivo CSS estiliza a seção de FAQ, garantindo uma aparência limpa e moderna. Os principais estilos incluem:

* Layout: Flexbox é usado para gerenciamento de layout.
* Tipografia: Configurações de fonte para diferentes elementos de texto.
* Transições: Transições suaves para expandir/recolher o conteúdo.

### JavaScript (index.js)
O arquivo JavaScript adiciona interatividade à seção de FAQ. As principais funções incluem:

* Event Listeners: Detectar cliques nos ícones para expandir/recolher perguntas.
* Função de Alternância: Alterar a altura e a visibilidade da seção de resposta e atualizar o ícone.

## Como Funciona
* O usuário clica em uma pergunta.
* O ícone associado muda para indicar o estado expandido.
* A seção de resposta torna-se visível com uma transição suave.
* Clicar na pergunta novamente recolhe a seção de resposta e muda o ícone de volta para o estado recolhido.

## Personalização
Para personalizar o FAQ

* Perguntas e Respostas: Modifique o conteúdo dentro dos elementos div com a classe pergunta em index.html.
* Estilização: Ajuste os estilos em style.css para combinar com suas preferências de design.
* Ícones: Substitua icone.png e seta aberta.png pelos seus próprios ícones, se desejar.

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.
