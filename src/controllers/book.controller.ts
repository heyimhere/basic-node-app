import { Request, Response } from 'express';
import BookModel from '../models/book.model';

export const getAllBooks = async (req: Request, res: Response) => {
	try {
		const books = await BookModel.find();
		res.status(200).json(books);
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error'});
	}
};

export const getBookById = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const book = await BookModel.findById(id);
		if(!book) {
			res.status(404).json({ error: 'Book not found'});
		}
		res.status(200).json(book);
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error'});
	}
};
