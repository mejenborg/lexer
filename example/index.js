const { Lexer } = require('../dist/lexer');
const { Delimiter } = require('../dist/delimiter');

let lexer = new Lexer(' Lorem Ipsum', [' ']);

console.log( lexer.consume() ); // (whitespace)
console.log( lexer.consume() ); // Lorem
console.log( lexer.consume() ); // (whitespace)
console.log( lexer.consume() ); // Ipsum
console.log( lexer.consume() ); // void
console.log( lexer.consume() ); // void