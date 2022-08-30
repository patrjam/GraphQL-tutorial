const resolvers = {
    Query: {
      tracksForHome: (_, __, {dataSources}) => {
        return dataSources.trackAPI.getTracksForHome()
        
      },
     /*  tracksForHomeFetch: async () => {
        const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
        const res = await fetch(`${baseUrl}/tracks`);
        return res.json();
      },  */
      
    },
    Track: {
      
      author: async ({ authorId }, _, { dataSources }) => {
        // using fetch instead of dataSources
        //const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
        //const res = await fetch(`${baseUrl}/author/${authorId}`);
        //return res.json();
  
        // return dataSources.trackAPI.getAuthor(authorId);

        return dataSources.trackAPI.getAuthor(authorId)
      },
    },
  }

  module.exports = resolvers;