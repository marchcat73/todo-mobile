import { StyleSheet, Pressable, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { GlobalStyles } from '../../constants/styles';

const TaskItem = ({ _id, name, taskDate, status }) => {
  const navigation = useNavigation();

  const taskPressHandler = () => {
    navigation.navigate('ManageTask', {
      taskId: _id,
    });
  };

  return (
    <Pressable
      onPress={taskPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.taskItem}>
        <View>
          <Text
            style={[
              status === 'completed' && styles.textComplete,
              styles.textBase,
              styles.name,
            ]}
          >
            {name}
          </Text>
          <Text style={styles.textBase}>{format(taskDate, 'yyyy-MM-dd')}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text
            style={[
              styles.status,
              (status === 'completed' && styles.statusDone) ||
                (status === 'inProgress' && styles.statusInProgress) ||
                (status === 'active' && styles.statusActive),
            ]}
          >
            {status}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  textComplete: {
    textDecorationLine: 'line-through',
  },
  taskItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  statusDone: {
    color: GlobalStyles.colors.done100,
  },
  statusActive: {
    color: GlobalStyles.colors.accent500,
  },
  statusInProgress: {
    color: GlobalStyles.colors.inProgress100,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  name: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  statusContainer: {
    width: '30%',
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: GlobalStyles.colors.gray700,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  status: {
    fontWeight: 'bold',
  },
});

export default TaskItem;
