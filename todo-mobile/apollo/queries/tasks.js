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
