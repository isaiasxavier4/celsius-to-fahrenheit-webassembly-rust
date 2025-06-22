# celsius-to-fahrenheit-webassembly-rust

WEBASSEMBLY QUE CONVERTE celsius para Fahrenheits. 

É um programa simples mais que me ensina muito sobre os fundamentos do Rust e também do HTML, CSS e JavaScript pois ainda estou em faze de fundamentos. 

A lógica também é muito simples, apenas crio o input para coletar a temperatura em Celsius (C°) que o usuário digitar, uso o JavaScript para pegar este dado e verificar se ele não digitou um valor invalido com o isNaN() passando o valor digitado e envio o dado para a função em Rust converter o valor em Fahrenheit que retorna o valor convertido, o JavaScripr pega este dado e mostra-o em uma tag <p> no HTML. 