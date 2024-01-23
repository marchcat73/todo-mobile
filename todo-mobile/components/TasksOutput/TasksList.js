import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const renderTaskItem = (itemData) => {
  return <TaskItem {...itemData.item} />;
};

const TasksList = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={renderTaskItem}
      keyExtractor={(item) => item._id}
    />
  );
};

export default TasksList;
