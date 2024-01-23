import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_FILTRED_TASKS_LIST } from '../apollo/queries/tasks';

const CompletedTasks = () => {
  const { loading, error, data } = useQuery(GET_FILTRED_TASKS_LIST, {
    variables: { status: 'completed' },
  });

  const tasks = (data && data.tasksFilter) || [];

  return <Text>CompletedTasks Screen</Text>;
};

export default CompletedTasks;
