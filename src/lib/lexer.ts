import { Delimiter } from './delimiter';
import { Token, TokenInterface } from './token';

export class Lexer {

	private readonly _string: string;
	private _delimiters: Delimiter[];
	private _index: number;

	constructor(string: string, delimiters: any[]) {
		this._string = string;
		this.setDelimiters(delimiters);
		this._index = 0;
	} 

	setDelimiters(delimiters: any[]) {
		this._delimiters = delimiters.map((delimiter: any): Delimiter => {
			return delimiter instanceof Delimiter ? delimiter : new Delimiter(delimiter)
		});
	}

	consume(no=1): TokenInterface|void {

		let token: string;
		let tokenIndex: number;
		let delimiter: Delimiter;

		for (let i=0; i<no; i++) {

			token='';
			tokenIndex = this._index;

			search: while(this._index < this._string.length) {
				token += this._string.substr(this._index++, 1);

				let delimiters = this._delimiters.filter((delimiter: Delimiter): boolean => delimiter.delimiter === token || delimiter.delimiter === this._string.substr(this._index, delimiter.delimiter.length));

				if (delimiters.length > 0) {
					delimiter = delimiters[0];
					break search;
				}
			}
		}

		if (token.length==0 && this._index==this._string.length) token = null;

		return new Token(token, tokenIndex, delimiter);
	}

	lookahead() {

	}

	identifyToken() {

	}
}