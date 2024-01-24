import { makeVar, InMemoryCache } from '@apollo/client';

export const taskStateVar = makeVar({
  name: 'test name',
  taskDate: '24.01.2024',
  status: 'active',
});

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        taskState: {
          read() {
            return taskStateVar();
          },
        },
        // tasks: {
        // 	merge(_existing, incoming) {
        // 		return incoming
        // 	}
        // }
      },
    },
  },
});
