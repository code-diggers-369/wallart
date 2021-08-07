import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';
import Axios from 'axios';

//
import SearchBar from './SearchBar/SearchBar';
import HorizontalBar from './HorizontalBar/HorizontalBar';

export default function HomeScreen() {
  const [category, setCategory] = useState([]);

  useEffect(async () => {
    const {data} = await Axios.get(
      'https://wallarthp.000webhostapp.com/api/getcategory',
    );

    setCategory(data);

    return () => {};
  }, []);

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={'#030318'} />
      <ScrollView>
        <SearchBar />

        {category.map((list, i) => {
          return (
            <View key={i}>
              <Text style={[style.text, {margin: 10, fontSize: 20}]}>
                {list.name}
              </Text>

              <HorizontalBar id={list.id} />
            </View>
          );
        })}

        <View style={{height: 30}}></View>
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
