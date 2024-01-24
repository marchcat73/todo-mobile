import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from './Input';
import Button from '../UI/Button';
import { GlobalStyles } from '../../constants/styles';

const TaskForm = () => {
  const [selectedStatus, setSelectedStatus] = useState();
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const nameChangedHandler = () => {};

  return (
    <View>
      <View>
        <Input
          label="Todo"
          textInputConfig={{
            onChangeText: nameChangedHandler,
            placeholder: 'Enter Todo',
            multiline: true,
            autoCorrect: false,
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
              label="In Progress"
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
          Selected Date: {date.toLocaleString()}
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
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default TaskForm;
