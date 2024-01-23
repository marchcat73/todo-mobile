import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import TasksList from './TasksList';

const TasksOutput = ({ loading, error, tasks }) => {
  if (error) {
    return (
      <View>
        <Text>Sorry, there was an error</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      {tasks.length > 0 ? (
        <View style={styles.container}>
          <TasksList tasks={tasks} />
        </View>
      ) : (
        <View>
          <Text>Tasks Not Found</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});

export default TasksOutput;
