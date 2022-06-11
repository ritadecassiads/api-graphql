const { gql } = require("apollo-server");

const query = gql `
    type Query {
        fruits: [Fruit] # retornando um array com todas as frutas
        fruit(id: ID!): Fruit # retornando uma fruta a partir de seu id
    }
`

module.exports = query;