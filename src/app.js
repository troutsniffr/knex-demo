const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js')['development']);

app.get('/', (request, response) => {
    response.send('knex & express go brrr');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/pets', (request, response) => {
    knex('pet')
        .select('*')
        .then(pets => {
            let petNames = pets.map(pet => pet.name)
            response.json(petNames)
        })
        console.log('pet done go');

})

app.get('/food', (request, response) => {
    knex('food_type')
        .select('*')
        .then(foods => {
            let foodNames = foods.map(food_type => food_type.name);
            let foodDeets = foods.map(food_type => food_type.description);
            response.json({foodNames, foodDeets});
        })
        console.log('food done go');

})