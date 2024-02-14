const perguntas = [
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        resposta:[
            "var myVar;",
            "let myVar;",
            "myVar = 10;",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        resposta:[
            "==",
            "===",
            "=",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
        resposta:[
            "print()",
            "log()",
            "console.log()",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
        resposta:[
            "// Comentário",
            "' Comentário",
            "/* Comentário */",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o método usado para converter uma string em um número inteiro em JavaScript?",
        resposta:[
            "parseInt()",
            "stringToInt()",
            "toInteger()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de negação em JavaScript?",
        resposta:[
            "!=",
            "!==",
            "!",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a estrutura de controle de fluxo que é usada para tomar decisões em JavaScript?",
        resposta:[
            "for",
            "while",
            "if",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o resultado de 10 + '2' em JavaScript?",
        resposta:[
            "12",
            "102",
            "102 (string)",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
        resposta:[
            "&",
            "+",
            "-",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função usada para encontrar o comprimento de uma string em JavaScript?",
        resposta:[
            "len()",
            "length()",
            "strlen()",
        ],
        correta: 1
    }
];


var acertos = 0;
$(document).ready(function(){

    $('#my-canvas').removeClass('active');
    var a = 1;
    for(let x = 0; x < perguntas.length; x++){
        const quizItem = $('template').contents().clone();
        quizItem.find('span').text(a)
        quizItem.find('h6').text(perguntas[x].pergunta);
        $('#quiz').append(quizItem);
        for(var i = 0; i < perguntas[x].resposta.length; i++){
            quizItem.find('dl').append('<dt> <input type="radio" name="pergunta'+x+'" value="'+i+'" class="perg-radio"> <label>'+perguntas[x].resposta[i]+'</label> </dt>');
            
        }
        a++;
    }

    
    
});

var respostas_corretas = {};
$(document).on('change', '.perg-radio', function(e){
    const pergunta_index = $(this).attr('name').split('pergunta')[1];
    const resposta_selecionada = $(this).val();

    const resposta_correta = perguntas[pergunta_index].correta == resposta_selecionada;

    respostas_corretas[pergunta_index] = resposta_correta;
    console.log(respostas_corretas);
 
    let acertos = 0;
    for (const index in respostas_corretas) {
        
        if (respostas_corretas[index]) {
            console.log(respostas_corretas[index]);
            acertos++;
            $('#acerto').text('');
            $('#acerto').text(acertos + '/' + perguntas.length);
        }
    }
    console.log(acertos);

    if(acertos == perguntas.length){
        $('.modal').modal('show');
        $('#my-canvas').addClass('active');

        var confettiSettings = { target: 'my-canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        setTimeout(function () {
            location.reload();
        }, 1500);
    }


 });