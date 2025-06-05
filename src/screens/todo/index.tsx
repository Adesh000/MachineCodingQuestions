import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {HeaderComponent, RenderTodoItems} from '../../components';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        ListHeaderComponent={<HeaderComponent />}
        data={todos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <RenderTodoItems item={item} />}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    paddingTop: 50,
  },
  flexBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
