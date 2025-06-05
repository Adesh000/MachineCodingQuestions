import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CustomButton, Input} from '../../components';

const RenderTodoItems = ({item, todos, updateTodos}) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [editableValue, setEditableValue] = useState<string>(item?.text);
  const onSave = () => {
    // Save
    setIsEditable(false);
    updateTodos(prevTodos => {
      const editedTodos = prevTodos.map(todo => {
        if (todo?.text === item?.text) {
          return {text: editableValue};
        } else {
          return todo;
        }
      });
      return editedTodos;
    });
  };

  const onEdit = () => {
    setIsEditable(true);
  };
  const onDelete = () => {
    const filteredTodos = todos.filter(
      todoItem => todoItem?.text !== item?.text,
    );
    updateTodos(filteredTodos);
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

const HeaderComponent = ({setTodos}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const onAddItem = () => {
    setTodos(previous => [...previous, {text: inputValue}]);
    setInputValue('');
  };
  return (
    <View style={[styles.flexBetween, {marginBottom: 30}]}>
      <Input value={inputValue} setValue={setInputValue} />
      <CustomButton title="Add" bgColor={'green'} onPress={onAddItem} />
    </View>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        ListHeaderComponent={<HeaderComponent setTodos={setTodos} />}
        data={todos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => (
          <RenderTodoItems item={item} todos={todos} updateTodos={setTodos} />
        )}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
  },
  flexBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
