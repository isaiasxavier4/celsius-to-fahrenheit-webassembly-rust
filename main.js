// Importa o módulo WebAssembly gerado pelo wasm-pack
// O caminho é relativo à pasta pkg criada pelo wasm-pack
import init, { celsius_to_fahrenheit } from './pkg/temperature_converter.js';

// Inicializa o módulo WebAssembly
// Isso é necessário antes de chamar qualquer função Rust
init().then(() => {
    console.log("WebAssembly module loaded!");
});

// Função chamada pelo botão no HTML
window.converterTemperatura = () => {
    const celsiusInput = document.getElementById('celsiusInput');
    const resultadoLabel = document.getElementById('resultado');

    //Poderia ser feito diretamente com a variável celsiusInput,
    //mas para uma boa explicação foi feito de forma separada
    const celsiusValue = parseFloat(celsiusInput.value);

    // Verifica se o valor é um número válido
    if (isNaN(celsiusValue)) {
        resultadoLabel.textContent = "Por favor, digite um número válido.";
        return;
    }

    // Chama a função Rust para converter
    // celsius_to_fahrenheit é importado do módulo Wasm
    const fahrenheitValue = celsius_to_fahrenheit(celsiusValue);

    // Exibe o resultado na página
    resultadoLabel.textContent = `Fahrenheit: ${fahrenheitValue.toFixed(2)} °F`;
};