//Usa a bibioteca WASM-PACK
//O wasm-pack não é uma biblioteca em si, mas sim uma ferramentea de
//linha de comando que auxilia no processo de criação, compilação e empacotamento
// de código Rust para WebAssembly(Wasm) - Font Google via Gemini.


use wasm_bindgen::prelude::*;

#[wasm_bindgen]
//Cria a função celsius_to_fahrenheit para converter
//Celsius(C°) para Fahrenheit(F°)
pub fn celsius_to_fahrenheit(celsius: f64) -> f64 {
    (celsius * 9.0 / 5.0) + 32.0
}