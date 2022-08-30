const {gql} = require('apollo-server')

const typeDefs = gql`

type Query {
    tracksForHome: [Track!]!
}

"A track is a group of modules that teaches about a specific topic"
type Track{
id: ID!
"the tracks title"
title: String!
"the tracks main author"
author: Author!
"the tracks main illustration to display in track card or track page detail"
thumbnail: String
"the tracks approximate length of complete, in minutes"
length: Int
"the number of modules this track contains"
modulesCount: Int
}

"Author of a complete Track"
type Author {
    id: ID!
    "authors first and last name"
    name: String!
    "authors profile picture url"
    photo: String
}

`


module.exports = typeDefs
