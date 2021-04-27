const service = require('./movies.service');
const asyncErrorBoundary =require('../errors/asyncErrorBoundary');

async function list(req, res) {
    const is_showing = req.query.is_showing;
    const data = await service.list(is_showing);
    res.json({ data });
}

async function movieExist(req, res, next) {
    const movie = await service.read(req.params.movieId);
    res.locals.movie = movie;
    console.log('Movie looks like this', movie);
    (movie) ? next() : next({status: 404, message: 'Movie not found'});
}

async function read(req, res){
    const data = res.locals.movie;
    res.json({ data });
}

async function listTheatersShowingMovie(req, res){
    const data = await service.listTheatersShowingMovie(req.params.movieId);
    res.json({ data });
}

async function listReviewsForMovie(req, res){
    const data = await service.listReviewsForMovie(req.params.movieId);
    res.json({ data });
}
module.exports = {
    list: asyncErrorBoundary(list),
    read: [asyncErrorBoundary(movieExist), asyncErrorBoundary(read)],
    readTheaters: [asyncErrorBoundary(movieExist), asyncErrorBoundary(listTheatersShowingMovie)],
    readReviews: [asyncErrorBoundary(movieExist), asyncErrorBoundary(listReviewsForMovie)],
}