const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            {
                texto: "Texto da primeira alternativa",
                afirmacao: "Afirmacao 1"
            },

            {
                texto: "texto da segunda alternativa ",
                afirmacao : "Afirmacao da alternativa 2"
            }
             
            
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto: "Texto da alternativa 1",
                afirmacao: "Afirmação da alternativa 1"
            },
            {
                texto: "Texto da afirmação 2",
                afirmacao: "Texto da afirmação 2"
            }
            
        ]
    } 
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntas[atual].enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function (){
            atual++;
            mostraPergunta();
        } )
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
