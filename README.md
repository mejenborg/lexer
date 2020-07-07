# Typescript Lexer
Simple TypeScript lexer

# Usage
To initialize new lexer
```javascript
const { Lexer } = require('../dist/lexer');

let lexer = new Lexer(' Lorem Ipsum', [' ']);
```

There are 2 ways of getting tokens:
**Sequential**
```javascript
lexer.consume(); // (whitespace)
lexer.consume(); // Lorem
lexer.consume(); // (whitespace)
lexer.consume(); // Ipsum
lexer.consume(); // void
```

**Collection**
```javascript
let tokens = lexer.tokenize();
tokens[0]; // (whitespace)
tokens[1]; // Lorem
tokens[2]; // (whitespace)
tokens[3]; // Ipsum
```

##
# License
MIT