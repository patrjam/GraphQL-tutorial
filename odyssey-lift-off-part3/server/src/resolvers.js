const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    //returns a single track by id for Track page
    track: (_, {id}, {dataSources}) => {
      return dataSources.trackAPI.getTrack(id)
    }
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({id}, _ , {dataSources}) => {
      return dataSources.trackAPI.getTrackModules(id) 
      //id is parent for track, resolver returns parent, which refers to the returned 
      //data of the preceding resolver function in the chain
    }
  },
};

module.exports = resolvers;
