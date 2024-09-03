const string = "Eu acho que desenvolver pro teste em JS é mais fácil do que em Java por conta da visualização do código.";
const letter = 'a';
let count = 0;

// Código alterado para remover acentos e caracteres especiais da string e contar por exemplo o a acentaudo em 'fácil'

// const normalizedString = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// let normalizedCount = 0;

// for (let i = 0; i < normalizedString.length; i++) {
//     if (normalizedString[i] === letter) {
//         normalizedCount++;
//     }
// }
// console.log(`A letra '${letter}' ocorre ${normalizedCount} vezes na string.`);

for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === letter.toLowerCase()) {
        count++;
    }
}

console.log(`A letra '${letter}' ocorre ${count} vezes na string.`);
