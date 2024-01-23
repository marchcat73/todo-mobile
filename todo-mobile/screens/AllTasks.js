import { StyleSheet, Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client';

const AllTasks = () => {
  const GET_TASKS_LIST = gql`
    query Tasks {
      tasks {
        _id
        name
        status
        taskDate
      }
    }
  `;
  const { data } = useQuery(GET_TASKS_LIST);

  const tasks = (data && data.tasks) || [];

  console.log(tasks);
  return <Text>AllTasks Screen</Text>;
};

export default AllTasks;
