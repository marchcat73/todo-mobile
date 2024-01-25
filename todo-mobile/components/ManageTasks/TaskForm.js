import { useState, useLayoutEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import Input from './Input';
import Button from '../UI/Button';
import { GlobalStyles } from '../../constants/styles';

const TaskForm = ({ initData, onCancel, onSubmit, submitButtonLabel }) => {
  const [selectedStatus, setSelectedStatus] = useState();
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const nameChangedHandler = (enteredName) => {
    setName(enteredName);
  };

  useLayoutEffect(() => {
    if (initData) {
      const { name, taskDate, status } = initData;

      setName(name);
      setDate(new Date(taskDate));
      setSelectedStatus(status);
    }
  }, [initData]);

  function submitHandler() {
    const taskData = {
      name: name,
      taskDate: date,
      status: selectedStatus,
    };

    onSubmit(taskData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Что купить</Text>
      <View>
        <Input
          label="Todo"
          value={name}
          textInputConfig={{
            onChangeText: nameChangedHandler,
            placeholder: 'Enter Todo',
            multiline: true,
            autoCorrect: false,
            value: name,
          }}
        />
        <Text style={styles.label}>Status</Text>
        <View>
          <Picker
            style={styles.pickerContainer}
            selectedValue={selectedStatus}
            onValueChange={(itemValue) => setSelectedStatus(itemValue)}
          >
            <Picker.Item label="Active" value="active" style={styles.picker} />
            <Picker.Item
              label="InProgress"
              value="inProgress"
              style={styles.picker}
            />
            <Picker.Item
              label="Completed"
              value="completed"
              style={styles.picker}
            />
          </Picker>
        </View>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.selectedDate}>
          Selected Date: {format(date, 'yyyy-MM-dd')}
        </Text>
        <Button onPress={showDatepicker}>Select date</Button>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            onChange={onChange}
            minimumDate={new Date()}
            timeZoneName={'Europe/Samara'}
          />
        )}
      </View>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 24,
    textAlign: 'center',
  },
  pickerContainer: {
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.primary100,
    marginBottom: 16,
    borderRadius: 6,
  },
  picker: {
    color: GlobalStyles.colors.primary700,
    padding: 0,
    fontSize: 18,
  },
  selectedDate: {
    marginVertical: 8,
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
  },
  dateContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
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
});

export default TaskForm;
