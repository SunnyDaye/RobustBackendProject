const service = require('./reviews.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function reviewExists(req, res, next) {
    const review = await service.read(req.params.reviewId);
    res.locals.oldReview = review;
    (review) ? next(): next({status: 404, message:'Review cannot be found'});
}
async function update(req, res) {
    const data = await service.update(req.body.data, req.params.reviewId);
    res.json({data});
}

async function destroy(req, res) {
    const data = await service.destroy(req.params.reviewId);
    res.status(204).json({ data });
}

module.exports = {
    update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
    delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
}