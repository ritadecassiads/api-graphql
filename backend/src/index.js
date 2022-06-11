// adicionamos dotenv para carregar as credenciais em variável de ambiente. Feito isso elas todas ficam acessíveis em process.env
require("dotenv").config()

const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')

const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

// Database: conexão ao banco
// const db = {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     pass: process.env.DB_PASS,
//     name: process.env.DB_NAME,
//   };
//   const dbUri = `mongodb+srv://ritadecassiads:edvania3@google-cloud.whjs1.mongodb.net/?retryWrites=true&w=majority`
//   const dbOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   };
//   mongoose
//     .connect(dbUri, dbOptions)
//     .then(() => console.log("Database connected"))
//     .catch(error => console.log("Databased failed: ", error))

mongoose.connect("mongodb+srv://ritadecassiads:edvania3@google-cloud.whjs1.mongodb.net/?retryWrites=true&w=majority", 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to the Database"))

// GraphQL
const server = new ApolloServer({ 
  typeDefs,
  resolvers,

  csrfPrevention: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
 })

server
    .listen()
    .then(({ url }) => console.log(`Server ready at ${url}`))
    .catch(error => console.log("Server failed: ", error))