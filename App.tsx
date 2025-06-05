import React from 'react';
import {View} from 'react-native';
import {GridLights, TicTacToe, TodoList} from './src';

function App(): React.JSX.Element {
  return (
    <View style={{backgroundColor: '#FFF'}}>
      <TodoList />
      {/* <TicTacToe /> */}
      {/* <GridLights /> */}
    </View>
  );
}

export default App;
