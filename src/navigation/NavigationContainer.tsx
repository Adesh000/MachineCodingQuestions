import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login, Search} from '../screens';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const AppNavigationContainer = () => {
  const {authToken} = useSelector(state => state.auth);
  console.log('Tokem', authToken);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authToken ? (
          <Stack.Screen name="Search" component={Search} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;

const styles = StyleSheet.create({});
