import { useLayoutEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import IconButton from '../components/UI/IconButton';
import {
  useDeleteTask,
  useCreateTask,
  useUpdateTask,
  useGetTaskById,
} from '../apollo/actions';
import { GlobalStyles } from '../constants/styles';
import TaskForm from '../components/ManageTasks/TaskForm';

const useInitialData = (id) => {
  const { data } = useGetTaskById({
    variables: { id },
  });

  const taskItem = (data && data.taskById) || null;

  return {
    taskItem,
  };
};

const ManageTask = ({ route, navigation }) => {
  const editedTaskId = route.params?.taskId;
  const isEditing = !!editedTaskId;
  const [deleteTask] = useDeleteTask();
  const [createTask] = useCreateTask();
  const [updateTask] = useUpdateTask();

  const { taskItem } = isEditing && useInitialData(editedTaskId);

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

  const confirmHandler = (taskData) => {
    const { name, taskDate, status } = taskData;
    if (isEditing) {
      updateTask({
        variables: {
          id: editedTaskId,
          name: name,
          taskDate: taskDate,
          status: status,
        },
      });
    } else {
      createTask({
        variables: {
          name: name,
          taskDate: taskDate,
          status: status,
        },
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TaskForm
        initData={taskItem}
        onCancel={cancelHandler}
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onSubmit={confirmHandler}
      />
      {/* <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View> */}
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
