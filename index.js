const CryptoJS = require("crypto-js"); // só no Node.js, no navegador não precisa

// Chave secreta (deve ser mantida segura)
const chaveSecreta = "minhaChave123";

// Função para criptografar
function criptografar(texto) {
  return CryptoJS.AES.encrypt(texto, chaveSecreta).toString();
}

// Função para descriptografar
function descriptografar(textoCriptografado) {
  const bytes = CryptoJS.AES.decrypt(textoCriptografado, chaveSecreta);
  return bytes.toString(CryptoJS.enc.Utf8);
}

// Exemplo de uso
const palavra = "programador";
const criptografada = criptografar(palavra);
const original = descriptografar(criptografada);

console.log("Original:", palavra);
console.log("Criptografada:", criptografada);
console.log("Descriptografada:", original);