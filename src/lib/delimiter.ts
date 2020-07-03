import { Token, TokenInterface } from './token';

export class Delimiter {
	
	private readonly _delimiter: string;
	// private readonly _type: string;
	// private readonly _class: string;

	constructor(delimiter: string/*, type: string, class: string*/) {

		this._delimiter = delimiter

		// this._type = type;
		// this._class = class;
	}

	get delimiter(): string {
		return this._delimiter;
	}

	test(string: string): boolean {
		return string === this._delimiter;
	}
}