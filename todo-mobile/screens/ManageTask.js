import { useLayoutEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import IconButton from '../components/UI/IconButton';
import { useDeleteTask, useCreateTask, useUpdateTask } from '../apollo/actions';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import TaskForm from '../components/ManageTasks/TaskForm';

const ManageTask = ({ route, navigation }) => {
  const editedTaskId = route.params?.taskId;
  const isEditing = !!editedTaskId;
  const [deleteTask] = useDeleteTask();
  const [createTask] = useCreateTask();
  const [updateTask] = useUpdateTask();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Task' : 'Add Task',
    });
  }, [navigation, isEditing]);

  const cancelHandler = () => {
    navigation.goBack();
  };

  const deleteTaskHandler = () => {
    Alert.alert('The task will be deleted!', 'The task will be deleted!', [
      {
        text: 'Cancel',
        onPress: () => cancelHandler(),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          deleteTask({ variables: { id: editedTaskId } });
          navigation.goBack();
        },
      },
    ]);
  };

  const confirmHandler = () => {
    if (isEditing) {
      updateTask({
        variables: {
          id: editedTaskId,
          name: 'Todo activated',
          taskDate: new Date(),
          status: 'active',
        },
      });
    } else {
      createTask({
        variables: {
          name: 'New todo test',
          taskDate: new Date(),
          status: 'inProgress',
        },
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TaskForm />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
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
