// ARSHPREET KAUR- 101343743

const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

const MONGODB ='mongodb+srv://Arsh:jWZHLrARuKzzOOdj@cluster0.iwdkoqo.mongodb.net/Assignment01?retryWrites=true&w=majority'

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser: true})
  .then(() => {
    console.log("MongoDB Connection Successful")
    return server.listen({port: 5000});
  })
  .then((res) => {
    console.log(`Server is running on ${res.url}`)
  })
 


//  Reference YouTube Link
//  https://www.youtube.com/watch?v=uPxo9NQLVMI&t=1698s




