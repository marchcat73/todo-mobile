import { tasksMutations, tasksQueris } from './task.resolver';

export const resolvers = {
  Query: {
    ...tasksQueris,
  },
  Mutations: {
    ...tasksMutations,
  },
};
