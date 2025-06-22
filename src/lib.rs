//Usa a bibioteca WASM-PACK
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
//Cria a função celsius_to_fahrenheit para converter
//Celsius(C°) para Fahrenheit(F°)
pub fn celsius_to_fahrenheit(celsius: f64) -> f64 {
    (celsius * 9.0 / 5.0) + 32.0
}