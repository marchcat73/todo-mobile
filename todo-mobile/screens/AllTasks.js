import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_TASKS_LIST } from '../apollo/queries/tasks';

const AllTasks = () => {
  const { data } = useQuery(GET_TASKS_LIST);

  const tasks = (data && data.tasks) || [];

  return <Text>AllTasks Screen</Text>;
};

export default AllTasks;
