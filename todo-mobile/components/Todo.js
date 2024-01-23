import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Todo = ({ item, deleteText }) => {
  return (
    <View style={[styles.item, { margin: 8, padding: 8 }]}>
      <Text>{item.name}</Text>
      <View style={styles.buttonsContainer}>
        <Button title={'Del'} color={'red'} onPress={() => deleteText(item)} />
        <Button
          title={'Red'}
          color={'green'}
          onPress={() => deleteText(item)}
        />
        <Button
          title={'Done'}
          color={'blue'}
          onPress={() => deleteText(item)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'whitesmoke',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Todo;
