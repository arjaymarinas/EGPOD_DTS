import express from "express";
import bodyParser from "body-parser";
import pageRoutes from "./routes/pageRoutes.js";
import documentRoutes from "./routes/documentRoutes.js";

const app = express();
const port = 3000;

// Parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', pageRoutes);
app.use('/api', documentRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});