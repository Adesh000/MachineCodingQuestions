import React, {FC, useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteTodo, updateTodo} from '../../redux';
import {StyleSheet, Text, View} from 'react-native';
import Input from '../input';
import CustomButton from '../button';

interface TodoItemProps {
  id: string;
  text: string;
}

const RenderTodoItems = ({item}: {item: TodoItemProps}) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [editableValue, setEditableValue] = useState<string>(item?.text);
  const dispatch = useDispatch();
  const onSave = () => {
    setIsEditable(false);
    dispatch(updateTodo({id: item?.id, text: editableValue}));
  };
  const onEdit = () => {
    setIsEditable(true);
  };
  const onDelete = () => {
    dispatch(deleteTodo(item?.id));
  };
  return isEditable ? (
    <View style={[styles.flexBetween, {marginBottom: 10}]}>
      <Input value={editableValue} setValue={setEditableValue} />
      <CustomButton title="Save" bgColor={'lightblue'} onPress={onSave} />
    </View>
  ) : (
    <View style={styles.flexBetween}>
      <Text>{item?.text}</Text>
      <View style={{flexDirection: 'row'}}>
        <CustomButton title={'Edit'} bgColor={'cyan'} onPress={onEdit} />
        <CustomButton title={'Delete'} bgColor={'red'} onPress={onDelete} />
      </View>
    </View>
  );
};

export default RenderTodoItems;

const styles = StyleSheet.create({
  flexBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
