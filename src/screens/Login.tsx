import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {CustomButton, Input} from '../components';
import {onLogin} from '../redux';
import {useDispatch} from 'react-redux';
const USER = 'Luke Skywalker';
const PASS = '19BBY';

const Login = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();
  const onSubmit = () => {
    if (userName !== USER && password !== PASS) {
      setErrorMsg('Wrong username and password');
      return;
    }
    const payload = {
      userName,
      password,
    };
    dispatch(onLogin(payload));
  };
  return (
    <View style={styles.mainContainer}>
      <Input
        value={userName}
        setValue={setUserName}
        placeholder={'Enter Username'}
      />
      <Input
        value={password}
        setValue={setPassword}
        placeholder={'Enter Password'}
      />
      {errorMsg && <Text style={{color: 'red'}}>{errorMsg}</Text>}
      <CustomButton title={'Login'} onPress={onSubmit} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
