"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
exports.Token = (function () {
    function Token(value, index, delimiter) {
        this._value = value;
        this._index = index;
        this._delimiter = delimiter;
    }
    Object.defineProperty(Token.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "delimiter", {
        get: function () {
            return this._delimiter;
        },
        enumerable: false,
        configurable: true
    });
    return Token;
}());
//# sourceMappingURL=token.js.map