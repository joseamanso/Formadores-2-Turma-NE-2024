const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são os sinais e sintomas mais comuns da depressão, e como podemos diferenciar a depressão de outras condições de saúde mental?",
        alternativas: [
            "Como podemos identificar sinais de depressão em comparação com outras condições de saúde mental, como ansiedade ou transtorno bipolar, em diferentes faixas etárias",
            "Como a depressão afeta exclusivamente o sono e o apetite, sem influenciar outros aspectos da saúde mental."
        ],
    },
    {
        enunciado: "Quais abordagens terapêuticas (medicamentosas e não medicamentosas) têm se mostrado mais eficazes no tratamento da depressão em diferentes grupos etários?",
        alternativas: [
            "Como a eficácia das abordagens terapêuticas para a depressão varia entre adolescentes, adultos e idosos, e quais são as melhores práticas para cada grupo.",
            "Por que a terapia cognitivo-comportamental é ineficaz em adolescentes, mas extremamente eficaz em idosos"
        ],
    },
];