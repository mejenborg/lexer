import { Token, IToken } from './token';

export class Delimiter {
	
	private readonly _delimiter: string;
	// private readonly _type: string;
	// private readonly _class: string;

	/**
	 * @constructor
	 */
	constructor(delimiter: string/*, type: string, class: string*/) {

		this._delimiter = delimiter

		// this._type = type;
		// this._class = class;
	}

	/**
	 * Get delimiter
	 *
	 * @return {string}
	 */
	get delimiter(): string {
		return this._delimiter;
	}

	/**
	 * Test delimiter against string
	 *
	 * @param {string} string Test string
	 * @return {boolean}
	 */
	test(string: string): boolean {
		return string === this._delimiter;
	}
}