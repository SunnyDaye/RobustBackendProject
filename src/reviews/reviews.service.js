const knex = require('../db/connection');
const mapProperties = require('../utils/map-properties');



async function read(reviewId){
    return knex('reviews')
            .select('*')
            .where({'review_id' : reviewId})
            .then(data => data[0]);
}


const addCriticProperty =  mapProperties({
    preferred_name: "critic.preferred_name",
    surname: "critic.surname",
    organization_name: "critic.organization_name",
  });

async function update(updatedReview, reviewId){
    const review = await knex('reviews as r')
            .select('*')
            .update(updatedReview,'*')
            .where({'r.review_id' : reviewId});

    const reviewWithCritic = await knex('reviews as r')
                                    .join('critics as c', 'r.critic_id', 'c.critic_id')
                                    .select('*')
                                    .where({'r.review_id' : reviewId})
                                    .then(reviews => addCriticProperty(reviews[0]));

    
    return reviewWithCritic;
}

async function destroy(reviewId){
    return knex('reviews')
            .where({'review_id': reviewId})
            .del();
}


module.exports = {
    read,
    update,
    destroy,
}