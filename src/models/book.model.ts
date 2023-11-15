import mongoose, { Document, Schema } from 'mongoose';
import { IBook } from '../types/book.types';

const BookSchema = new Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	publishedYear: { type: Number }
});

const BookModel = mongoose.model<IBook & Document>('Book', BookSchema);

export default BookModel;

