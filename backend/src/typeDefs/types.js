const { gql } = require("apollo-server")

const types = gql `
    type Fruit {
        id: ID!
        name: String!
        nutritions: Nutritions
    }
    type Nutritions {
        sugar: String
        calories: String
    }
`

module.exports = types