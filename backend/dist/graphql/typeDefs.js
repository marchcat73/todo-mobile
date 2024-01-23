import gql from 'graphql-tag';
import { taskTypes } from './types/index.js';
export const typeDefs = gql `
  ${taskTypes}

  type Query {
    tasks: [TaskResponse]
    tasksFilter(status: StatusTypes): [TaskResponse]
    taskById(id: ID!): TaskResponse
  }

  type Mutations {
    createTask(
      name: String!
      taskDate: String!
      status: StatusTypes!
    ): TaskResponse!
    updateTask(
      id: ID!
      name: String!
      taskDate: String!
      status: StatusTypes!
    ): TaskResponse!
    deleteTask(id: ID!): Boolean
  }
`;
