import type http from 'http';
import { ApolloServer, BaseContext } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { resolvers } from './resolvers/index.js';
import { typeDefs } from './typeDefs.js';

export interface MyContext extends BaseContext {}

// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.

export const apolloServer = (httpServer: http.Server) => {
  return new ApolloServer<MyContext>({
    cache: 'bounded',
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
};
