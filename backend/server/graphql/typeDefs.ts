import gql from 'graphql-tag';
import { taskTypes } from './types/index.js';

export const typeDefs = gql`
  ${taskTypes}

  type Query {
    tasks: [TaskResponse]
    tasksFilter(status: StatusTypes): [TaskResponse]
    taskById(_id: ID!): TaskResponse
  }

  type Mutation {
    createTask(
      name: String!
      taskDate: String!
      status: StatusTypes!
    ): TaskResponse!
    updateTask(
      _id: ID!
      name: String
      taskDate: String
      status: StatusTypes
    ): TaskResponse!
    deleteTask(_id: ID!): Boolean
  }
`;
