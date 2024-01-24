import { useLayoutEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import IconButton from '../components/UI/IconButton';
import { useDeleteTask } from '../apollo/actions';
import { GlobalStyles } from '../constants/styles';

const ManageTask = ({ route, navigation }) => {
  const editedTaskId = route.params?.taskId;
  const isEditing = !!editedTaskId;
  const [deleteTask] = useDeleteTask();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Task' : 'Add Task',
    });
  }, [navigation, isEditing]);

  const deleteTaskHandler = () => {
    Alert.alert('The task will be deleted', 'The task will be deleted', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => deleteTask({ variables: { id: editedTaskId } }),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteTaskHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});

export default ManageTask;
