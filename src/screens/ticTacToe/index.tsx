import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {CustomButton} from '../../components';

const TicTacToe = () => {
  const boxes = new Array(9).fill('');
  console.log('Boxes', boxes);
  const winnigs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(boxes);
  const [isTurn, setIsTurn] = useState(false);
  const [winner, setWinner] = useState('');

  const checkWinner = (value: string, boardToCheck: string[] = board) => {
    return winnigs.some(combo =>
      combo.every(index => boardToCheck[index] === value),
    );
  };
  const onBoxPress = (index: number) => {
    if (board[index] !== '' || winner) return;

    const currentPlayer = isTurn ? '0' : 'X';
    const updatedBoard = board.map((elem, ind) =>
      ind === index ? currentPlayer : elem,
    );
    if (checkWinner(currentPlayer, updatedBoard)) {
      setWinner(currentPlayer);
    }
    setBoard(updatedBoard);
    setIsTurn(prev => !prev);
  };

  const onReset = () => {
    setBoard(boxes);
    setIsTurn(false);
    setWinner('');
  };
  return (
    <View style={styles.mainContainer}>
      <Text>{isTurn ? "0's Turn" : "X's Turn"}</Text>
      <FlatList
        data={board}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.box}
            onPress={() => onBoxPress(index)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={() => (
          <View style={{marginVertical: 20}}>
            <Text>{winner} Won</Text>
            <CustomButton title={'Reset'} onPress={onReset} />
          </View>
        )}
      />
    </View>
  );
};

export default TicTacToe;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
