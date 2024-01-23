import { View, Text } from 'react-native';
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
        <View>
          <Text>Tasks not 0</Text>
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

export default TasksOutput;
