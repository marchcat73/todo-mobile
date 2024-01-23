import { tasksMutations, tasksQueris } from './task.resolver.js';
export const resolvers = {
    Query: {
        ...tasksQueris,
    },
    Mutations: {
        ...tasksMutations,
    },
};
