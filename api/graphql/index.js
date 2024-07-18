const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { loadFiles } = require("@graphql-tools/load-files");
const resolvers = require("./resolvers");
const { buildContext } = require("graphql-passport");

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles("./api/**/*.graphql"),
    resolvers,
    context: ({ req, res }) => buildContext({ req, res }),
    playground: true,
    introspection : true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await server.start();
  server.applyMiddleware({ app });
};

module.exports = useGraphql;
