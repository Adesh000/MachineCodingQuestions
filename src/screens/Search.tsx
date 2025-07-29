import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Input} from '../components';

const PlanetCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Text style={{fontSize: item?.population > 100000000 ? 20 : 14}}>
        {item?.name}
      </Text>
    </View>
  );
};

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [planetsData, setPlanetsData] = useState([]);
  const [page, setPage] = useState(1);
  console.log('Page:', page);
  const [isLoading, setIsLoading] = useState(false);
  const [noData, setNoData] = useState('');

  const fetchPlanets = async () => {
    try {
      const res = await fetch(
        `https://swapi.py4e.com/api/planets/?name=${searchValue}/?page=${page}`,
      );
      const data = await res.json();
      console.log('Data', data);
      if (data?.results) {
        setPlanetsData(prev => [...prev, ...data?.results]);
      } else {
        setNoData(data?.detail);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPlanets();
  }, [searchValue, page]);
  return (
    <View style={styles.container}>
      <Input
        value={searchValue}
        setValue={setSearchValue}
        placeholder={'Serach....'}
      />

      <FlatList
        data={planetsData}
        keyExtractor={item => item?.created}
        renderItem={({item}) => <PlanetCard item={item} />}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={() => !isLoading && <Text>{noData}</Text>}
        onEndReached={() => {
          if (planetsData.length >= 10) {
            setPage(page => page + 1);
            setIsLoading(true);
          }
        }}
        ListFooterComponent={() =>
          isLoading && <ActivityIndicator size={'large'} />
        }
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#FFF',
    elevation: 5,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
});
