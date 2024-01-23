import { View } from 'react-native';
import TasksList from './TasksList';

const TasksOutput = ({ tasks }) => {
  return (
    <View>
      <TasksList />
    </View>
  );
};

export default TasksOutput;
