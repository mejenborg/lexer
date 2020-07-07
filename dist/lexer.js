"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lexer = void 0;
var delimiter_1 = require("./delimiter");
var token_1 = require("./token");
var Lexer = (function () {
    function Lexer(string, delimiters) {
        this._string = string;
        this.setDelimiters(delimiters);
        this._index = 0;
    }
    Lexer.prototype.setDelimiters = function (delimiters) {
        this._delimiters = delimiters.map(function (delimiter) {
            return delimiter instanceof delimiter_1.Delimiter ? delimiter : new delimiter_1.Delimiter(delimiter);
        });
    };
    Lexer.prototype.consume = function (no) {
        var _this = this;
        if (no === void 0) { no = 1; }
        var token;
        var tokenIndex;
        var delimiter;
        for (var i = 0; i < no; i++) {
            token = '';
            tokenIndex = this._index;
            search: while (this._index < this._string.length) {
                token += this._string.substr(this._index++, 1);
                var delimiters = this._delimiters.filter(function (delimiter) { return delimiter.delimiter === token || delimiter.delimiter === _this._string.substr(_this._index, delimiter.delimiter.length); });
                if (delimiters.length > 0) {
                    delimiter = delimiters[0];
                    break search;
                }
            }
        }
        if (token.length == 0 && this._index == this._string.length)
            token = null;
        return new token_1.Token(token, tokenIndex, delimiter);
    };
    Lexer.prototype.lookahead = function (no) {
        if (no === void 0) { no = 1; }
        var index = this._index;
        var token = this.consume(no);
        this._index = index;
        return token;
    };
    Lexer.prototype.tokenize = function () {
        var tokens = [];
        var token;
        while ((token = this.consume()).value) {
            tokens.push(token);
        }
        if (tokens.length > 0)
            return tokens;
    };
    Lexer.prototype.reset = function () {
        this._index = 0;
    };
    return Lexer;
}());
exports.Lexer = Lexer;
//# sourceMappingURL=lexer.js.map