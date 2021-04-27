const knex = require('../db/connection');
const reduceProperties = require("../utils/reduce-properties");

const reduceMovies = reduceProperties("theater_id", {
    runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
    title: ["movies", null, "title"],
    rating: ["movies", null, "rating"],
    
  });

async function list(){
    return knex('theaters as t')
            .join('movies_theaters as mt', 't.theater_id', 'mt.theater_id' )
            .join('movies as m', 'mt.movie_id', 'm.movie_id')
            .select('t.*','m.runtime_in_minutes','m.title','m.rating')
            .then(theaters => reduceMovies(theaters));

    
}



module.exports = {
    list,
}