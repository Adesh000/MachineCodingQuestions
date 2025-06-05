import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({value, setValue}) => {
  return (
    <TextInput
      value={value}
      onChangeText={(text: string) => setValue(text)}
      style={styles.input}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 10,
    paddingVertical: 5,
  },
});
