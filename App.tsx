import React from 'react';
import {View} from 'react-native';
import {
  AppNavigationContainer,
  GridLights,
  Login,
  store,
  TicTacToe,
  TodoList,
} from './src';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <View style={{backgroundColor: '#FFF', flex: 1}}>
        {/* <TodoList /> */}
        {/* <TicTacToe /> */}
        {/* <GridLights /> */}
        <AppNavigationContainer />
        {/* <Login /> */}
      </View>
    </Provider>
  );
}

export default App;
