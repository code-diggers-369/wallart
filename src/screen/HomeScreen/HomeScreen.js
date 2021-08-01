import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//
import SearchBar from './SearchBar/SearchBar';

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <Text style={{color: '#fff'}}>Home</Text>

      <SearchBar />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030318',
  },
});
