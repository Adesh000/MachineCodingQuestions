import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../redux';
import {StyleSheet, View} from 'react-native';
import Input from '../input';
import CustomButton from '../button';

const HeaderComponent = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useDispatch();
  const onAddItem = () => {
    dispatch(addTodo(inputValue));
    setInputValue('');
  };
  return (
    <View style={[styles.flexBetween, {marginBottom: 30}]}>
      <Input value={inputValue} setValue={setInputValue} />
      <CustomButton title="Add" bgColor={'green'} onPress={onAddItem} />
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  flexBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
