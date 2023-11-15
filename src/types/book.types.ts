import { Document } from 'mongoose';

export interface IBook {
	title: string,
	author: string,
	publishedYear?: number,
};

export interface IBookDocument extends IBook, Document {};

