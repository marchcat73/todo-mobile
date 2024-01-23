import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_FILTRED_TASKS_LIST } from '../apollo/queries/tasks';

const InProgressTasks = () => {
  const { loading, error, data } = useQuery(GET_FILTRED_TASKS_LIST, {
    variables: { status: 'inProgress' },
  });

  const tasks = (data && data.tasksFilter) || [];

  return <Text>InProgressTasks Screen</Text>;
};

export default InProgressTasks;
