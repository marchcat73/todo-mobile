import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_FILTRED_TASKS_LIST } from '../apollo/queries/tasks';

const ActiveTasks = () => {
  const { loading, error, data } = useQuery(GET_FILTRED_TASKS_LIST, {
    variables: { status: 'active' },
  });

  const tasks = (data && data.tasksFilter) || [];

  return <Text>ActiveTasks Screen</Text>;
};

export default ActiveTasks;
