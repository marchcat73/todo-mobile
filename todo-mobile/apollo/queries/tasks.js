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
  query TasksFilter($status: StatusTypes) {
    tasksFilter(status: $status) {
      _id
      name
      status
      taskDate
    }
  }
`;
