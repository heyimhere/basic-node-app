import express from 'express';
import * as bookController from '../controllers/book.controller';

const router = express.Router();

router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);
router.post('/books', bookController.createBook);

export default router;
