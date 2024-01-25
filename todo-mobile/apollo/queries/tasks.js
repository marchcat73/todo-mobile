import { gql } from '@apollo/client';

export const GET_TASKS_LIST = gql`
  query Tasks {
    tasks {
      _id
      name
      status
      taskDate
    }
  }
`;

export const GET_FILTRED_TASKS_LIST = gql`
  query TasksFilter($status: StatusTypes!) {
    tasksFilter(status: $status) {
      _id
      name
      status
      taskDate
    }
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask(
    $name: String!
    $taskDate: String!
    $status: StatusTypes
  ) {
    createTask(name: $name, taskDate: $taskDate, status: $status) {
      _id
      name
      taskDate
      status
    }
  }
`;

export const GET_TASK_BY_ID = gql`
  query TaskById($id: ID!) {
    taskById(id: $id) {
      _id
      name
      status
      taskDate
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id)
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask(
    $id: ID!
    $name: String
    $taskDate: String
    $status: StatusTypes
  ) {
    updateTask(id: $id, name: $name, taskDate: $taskDate, status: $status) {
      _id
      name
      status
      taskDate
    }
  }
`;
