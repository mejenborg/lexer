"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delimiter = void 0;
var Delimiter = (function () {
    function Delimiter(delimiter) {
        this._delimiter = delimiter;
    }
    Object.defineProperty(Delimiter.prototype, "delimiter", {
        get: function () {
            return this._delimiter;
        },
        enumerable: false,
        configurable: true
    });
    Delimiter.prototype.test = function (string) {
        return string === this._delimiter;
    };
    return Delimiter;
}());
exports.Delimiter = Delimiter;
//# sourceMappingURL=delimiter.js.map