const resolvers = {
  Query: {
    device: (_, { id }, { dataSources }) => {
      return dataSources.waziupAPI.getDevice(id);
    },
  },
};

module.exports = resolvers;
