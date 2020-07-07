import { Delimiter } from './delimiter';
import { Token, IToken } from './token';

export class Lexer {

	private readonly _string: string;
	private _delimiters: Delimiter[];
	private _index: number;

	/**
	 * @constructor
	 */
	constructor(string: string, delimiters: (Delimiter|string)[]) {
		this._string = string;
		this.setDelimiters(delimiters);
		this._index = 0;
	} 

	/**
	 * Set list of delimiters
	 *
	 * @param {(Delimiter|string)[]} delimiters
	 */
	setDelimiters(delimiters: (Delimiter|string)[]) {
		this._delimiters = delimiters.map((delimiter: Delimiter|string): Delimiter => {
			return delimiter instanceof Delimiter ? delimiter : new Delimiter(delimiter);
		});
	}

	/**
	 * Consume and return token
	 *
	 * @param {number} no       Number of tokens to consume
	 * @return {IToken} Last consumed token
	 */
	consume(no: number = 1): IToken {

		let token: string;
		let tokenIndex: number;
		let delimiter: Delimiter;

		for (let i=0; i<no; i++) {

			token='';
			tokenIndex = this._index;

			search: while(this._index < this._string.length) {
				token += this._string.substr(this._index++, 1);

				const delimiters = this._delimiters.filter((delimiter: Delimiter): boolean => delimiter.test(token) || delimiter.test(this._string.substr(this._index, delimiter.delimiter.length)));

				if (delimiters.length > 0) {
					delimiter = delimiters[0];
					break search;
				}
			}
		}

		if (token.length==0 && this._index==this._string.length) token = null;

		return new Token(token, tokenIndex, delimiter);
	}

	/**
	 * Get the token without consuming it
	 *
	 * @param {number} no       Number of token to lookahead
	 * @return {IToken} Token
	 */
	lookahead(no: number = 1): IToken {

		const index = this._index;
		const token = this.consume(no);

		this._index = index;

		return token;
	}

	/**
	 * Tokenize the source into list of tokens
	 *
	 * @return {IToken[]}
	 */
	tokenize(): IToken[] {

		const tokens: IToken[] = [];
		let token: IToken;

		while ((token = this.consume()).value) {
			tokens.push(token);
		}

		if (tokens.length>0) return tokens;
	}

	/**
	 * Reset index back to beginning
	 */
	reset(): void {
		this._index = 0;
	}
}