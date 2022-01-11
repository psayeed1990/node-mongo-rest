const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

// Load env variables
dotenv.config();

//cors
app.use(cors());

//connect mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

//urlencoded
app.use(express.urlencoded({ extended: true }));

//accept json
app.use(express.json());

//routes
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
