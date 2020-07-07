import { Delimiter } from './delimiter';


export interface TokenConstructor {

	/**
	 * @constructor
	 */
	new (value: string|null, index: number, delimiter: Delimiter): TokenInterface;
}


export interface TokenInterface {

	/**
	 * Value of the token
	 */
	readonly value: string|null;

	/**
	 * Index of the token
	 */
	readonly index: number;

	/**
	 * Token delimiter
	 */
	readonly delimiter: Delimiter|null;
}


export const Token: TokenConstructor = class Token implements TokenInterface {

	private readonly _value: string|null;
	private readonly _index: number;
	private readonly _delimiter: Delimiter;

	/**
	 * @constructor
	 */
	constructor(value: string|null, index: number, delimiter?: Delimiter) {
		this._value = value;
		this._index = index;
		this._delimiter = delimiter;
	}

	/**
	 * Return the value of the token
	 *
	 * @return {string|null}
	 */
	get value(): string|null {
		return this._value;
	}

	/**
	 * Return the index of the token
	 *
	 * @return {number}
	 */
	get index(): number {
		return this._index;
	}

	get delimiter(): Delimiter|null {
		return this._delimiter;
	}
}