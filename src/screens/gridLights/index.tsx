import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const RenderLightBox = ({
  index,
  setActiveLights,
  activeLights,
  setRemoveLights,
}: {
  index: number;
  setActiveLights: () => void;
  activeLights: number[];
  setRemoveLights: () => void;
}) => {
  const isActive = activeLights.includes(index);
  const onLightPress = () => {
    if (index === 4 || isActive) return;
    setActiveLights(prev => {
      let updatedLights = [...prev, index];
      if (updatedLights.length === 8) {
        setRemoveLights(true);
      }
      return updatedLights;
    });
  };
  return (
    <TouchableOpacity
      style={[
        styles.lightBox,
        {backgroundColor: isActive ? 'lightgreen' : '#FFF'},
      ]}
      onPress={onLightPress}>
      <Text>{index + 1}</Text>
    </TouchableOpacity>
  );
};

const GridLights = () => {
  const lights = new Array(9).fill(null);
  const [activeLights, setActiveLights] = useState([]);
  const [removeLights, setRemoveLights] = useState(false);

  useEffect(() => {
    let interval;
    if (removeLights) {
      interval = setInterval(() => {
        setActiveLights(prev => {
          if (prev.length === 0) {
            clearInterval(interval);
            setRemoveLights(false);
            return prev;
          }
          return prev.slice(0, -1);
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [removeLights]);

  return (
    <View style={styles.mainBox}>
      <FlatList
        data={lights}
        contentContainerStyle={styles.flatlistContainer}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
        renderItem={({item, index}) => (
          <RenderLightBox
            index={index}
            setActiveLights={setActiveLights}
            activeLights={activeLights}
            setRemoveLights={setRemoveLights}
          />
        )}
      />
    </View>
  );
};

export default GridLights;

const styles = StyleSheet.create({
  mainBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  lightBox: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 2,
  },
  flatlistContainer: {
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 10,
  },
});
