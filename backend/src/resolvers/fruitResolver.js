const Fruit = require('../models/fruit');

const fruitResolver = {
    Query: {
        fruits() {
            return Fruit.find();
        },
        fruit(_, { id }) {
            return Fruit.findById(id);
        },
    },

    Mutation: {
        createFruit(_, { fruit }) {
            const newFruit = new Fruit(fruit);
            return newFruit.save()
        },
    
        updateFruit(_, { id, fruit }) {
            return Fruit.findByIdAndUpdate(id, fruit, { new: true });
        },

        deleteFruit(_, { id }) {
            return Fruit.findByIdAndRemove(id);
        },
    },
}

module.exports = fruitResolver

// Neste arquivo usamos métodos expostos pela biblioteca Mongoose onde criamos a model no fruis.js. Dessa forma associamos as queries e mutations criadas nas definições de tipos à ações no banco de dados MongoDB