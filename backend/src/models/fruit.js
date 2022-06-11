const mongoose = require("mongoose");

const FruitSchema = mongoose.Schema({
    nome: String,
    nutritions: {
        sugar: String,
        calories: String,
    },
});

module.exports = mongoose.model("Fruit", FruitSchema);
// usamos models para implementar funções do banco de dados uma vez que são as models que fazem a interface com banco