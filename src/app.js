if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();

const moviesRouter = require('./movies/movies.router');
const criticsRouter = require('./critics/critics.router');
const reviewsRouter = require('./reviews/reviews.router');
const theatersRouter = require('./theaters/theaters.router');

app.use(express.json()); //Allows for body's to be attached to req and res.

//TODO: Call routers for each debugger
app.use('/movies',moviesRouter);
app.use('/critics',criticsRouter);
app.use('/reviews',reviewsRouter);
app.use('/theaters',theatersRouter);

//TODO: Implement not found handler
app.use((req, res, next) => {
    next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

//TODO: Implement error handler
app.use((error, req, res, next) => {  // ! Handles all errors
    console.error(error);
    const { status = 500, message = "Something went wrong!" } = error;
    res.status(status).json({ error: message });
  });



module.exports = app;
