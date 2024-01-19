import express from "express";
import { PORT , mongoDBURL} from "./config.js";
import mongoose from 'mongoose'; 
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';
const app = express(); 

//Allows requests to use json body
app.use(express.json()); 

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Hi")
}); 

//Middleware for handling CORS POLICY
// Option 1: Alllow All Origins with Default of cors(*)
app.use(cors());

//Option 2: Allow Custom Origins
app.use(
    cors ({
        origin:'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
)

//handles any route starting with /books with booksRoute
app.use('/books', booksRoute); 

mongoose.connect(mongoDBURL).then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB")
        console.log(`Listening to: ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})

