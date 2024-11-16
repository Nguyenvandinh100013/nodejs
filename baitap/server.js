const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const bookingRoutes = require('./routes/bookingRoutes');  

const connectDB = require('./config/database');
require('dotenv').config();

const app = express();
connectDB();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use('/', bookingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
