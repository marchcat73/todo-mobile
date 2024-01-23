import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { useGetTasksList } from '../apollo/actions';
import Todo from './Todo';

const TodoList = () => {
  //   const GET_TASKS_LIST = gql`
  //     query Tasks {
  //       tasks {
  //         _id
  //         name
  //         status
  //         taskDate
  //       }
  //     }
  //   `;
  //   const { data } = useQuery(GET_TASKS_LIST);

  //   const tasks = (data && data.tasks) || [];

  //   console.log(tasks);

  const initListState = [
    {
      name: 'Todo 1',
      taskDate: '24.01.2024',
      status: 'active',
    },
  ];
  const [text, setText] = useState();
  const [list, setList] = useState(initListState);

  const addItem = () => {
    const updatedList = list.slice();
    updatedList.push(text);
    setList(updatedList);
    setText('');
  };

  const deleteItem = (index) => {
    const updatedList = list.filter((todo) => todo !== index);
    setList(updatedList);
  };

  return (
    <View style={{ width: '80%', marginBottom: 60 }}>
      <Text style={[styles.align, styles.font]}>Todo List</Text>
      <ScrollView>
        {list.length > 0 &&
          list.map((t, index) => (
            <Todo key={`${t.name}-${index}`} item={t} deleteText={deleteItem} />
          ))}
      </ScrollView>
      <View style={{ marginTop: 40 }}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button title="Add item" onPress={addItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  align: {
    alignSelf: 'center',
  },

  font: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 8,
  },
});

export default TodoList;
