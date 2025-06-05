import React from 'react';
import {View} from 'react-native';
import {GridLights, store, TicTacToe, TodoList} from './src';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <View style={{backgroundColor: '#FFF'}}>
        <TodoList />
        {/* <TicTacToe /> */}
        {/* <GridLights /> */}
      </View>
    </Provider>
  );
}

export default App;
