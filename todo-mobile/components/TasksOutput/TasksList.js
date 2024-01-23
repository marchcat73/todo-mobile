import { FlatList, Text, StyleSheet } from 'react-native';

const renderTaskItem = (itemData) => {
  return (
    <Text style={itemData.item.status === 'completed' && styles.textComplete}>
      {itemData.item.name}
    </Text>
  );
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

const styles = StyleSheet.create({
  textComplete: {
    textDecorationLine: 'line-through',
  },
});

export default TasksList;
