import React from 'react';
import {View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';

//
import SearchBar from './SearchBar/SearchBar';
import HorizontalBar from './HorizontalBar/HorizontalBar';

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={'#030318'} />
      <ScrollView>
        <SearchBar />

        <Text style={[style.text, {margin: 10, fontSize: 20}]}>Trending</Text>

        <HorizontalBar />

        <Text style={[style.text, {margin: 10, fontSize: 20}]}>Trending</Text>
        <HorizontalBar />

        <Text style={[style.text, {margin: 10, fontSize: 20}]}>Trending</Text>
        <HorizontalBar />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#030318',
    backgroundColor: '#030318',
  },
  text: {
    color: '#fff',
  },
});
