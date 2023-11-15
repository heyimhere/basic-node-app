import express from 'express';
import * as bookController from '../controllers/book.controller';

const router = express.Router();

router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);

export default router;
