import { tasksMutation, tasksQuery } from './task.resolver.js';

export const resolvers = {
  Query: {
    ...tasksQuery,
  },
  Mutation: {
    ...tasksMutation,
  },
};
