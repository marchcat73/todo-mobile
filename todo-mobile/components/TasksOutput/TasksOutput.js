import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import TasksList from './TasksList';

const TasksOutput = ({ loading, error, tasks }) => {
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>Sorry, there was an error</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>Loading...</Text>
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
        <View style={styles.container}>
          <Text style={styles.infoText}>Tasks Not Found</Text>
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
  infoText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});

export default TasksOutput;
