import { useState, useRef } from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from './Input';

const TaskForm = () => {
  const [selectedStatus, setSelectedStatus] = useState();
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

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
            keyboardType: 'default',
            onChangeText: nameChangedHandler,
            placeholder: 'Enter Todo',
          }}
        />
        <Picker
          ref={pickerRef}
          selectedValue={selectedStatus}
          onValueChange={(itemValue) => setSelectedStatus(itemValue)}
          prompt="Status"
        >
          <Picker.Item label="Active" value="active" />
          <Picker.Item label="In Progress" value="inProgress" />
          <Picker.Item label="Completed" value="completed" />
        </Picker>
      </View>

      <SafeAreaView>
        <Button onPress={showDatepicker} title="Select date" />
        <Text>selected: {date.toLocaleString()}</Text>
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
      </SafeAreaView>
    </View>
  );
};

export default TaskForm;
