/*
need to create graph ql server that will:
process graph ql queries
validate these queries against our new created schema
populate the schema fields we query for with mocked data
returning the populated fields as a response
*/

const {ApolloServer} = require('apollo-server')
const typeDefs = require('./schema')

const mocks = {
    Query: () => ({
        tracksForHome: () => [...new Array(6)],
    }),
    Track: () => ({
      id: () => 'track_01',
      title: () => 'Astro Kitty, Space Explorer',
      author: () => {
        return {
          name: 'Grumpy Cat',
          photo:
            'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
        };
      },
      thumbnail: () =>
        'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
      length: () => 1210,
      modulesCount: () => 6
    })
  };

const server = new ApolloServer({typeDefs, mocks})

server.listen().then(() => {
    console.log(`My fabulous server is running ...`)
})