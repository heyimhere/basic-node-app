import express from 'express';
import mongoose from 'mongoose';
import bookRoutes from './routes/book.routes';
import config from './config';

const app = express();

const PORT = config.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use('/api', bookRoutes);

console.log('mongod uri', config.MONGODB_URI);

mongoose.connect(config.MONGODB_URI as string, {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
	console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
