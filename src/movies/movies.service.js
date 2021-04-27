const knex = require('../db/connection');
const mapProperties = require('../utils/map-properties');

async function list(active){
    return (active) ? knex('movies as m')
                        .select('m.*')
                        .join('movies_theaters as mt','m.movie_id','mt.movie_id')
                        .where({ 'mt.is_showing': true})
                        .groupBy('m.movie_id') :
                        knex('movies')
                        .select('*');
}

async function read(movieId){

    return knex('movies')
            .select('*')
            .where({'movie_id': movieId})
            .then((records) => records[0]);

}

async function listTheatersShowingMovie(movieId){
    return knex('theaters as t')
            .join('movies_theaters as mt','t.theater_id','mt.theater_id')
            .select('t.*')
            .where({'mt.movie_id': movieId})
            .groupBy('t.theater_id');
}

const addCriticProperty =  mapProperties({
    critic_id: "critic.critic_id",
    preferred_name: "critic.preferred_name",
    surname: "critic.surname",
    organization_name: "critic.organization_name",
  });


async function listReviewsForMovie(movieId){

    return knex('reviews as r')
            .join('critics as c', 'r.critic_id','c.critic_id')
            .select('*')
            .where({'r.movie_id': movieId})
            .then(reviews => {
                return reviews.map(review => addCriticProperty(review));
              });
}

module.exports = {
    list,
    read,
    listTheatersShowingMovie,
    listReviewsForMovie,
};