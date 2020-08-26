const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use('/exercises', exercisesRouter);
app.use('/user', usersRouter);

app.listen(port, () => {
    console.log(`Server started at: ${port}`);
})

const dbURI = 'mongodb+srv://ninja:test1234@nodetuts.fphot.mongodb.net/exerciseDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('Connected'))
    .catch((err) => console.log(err));


