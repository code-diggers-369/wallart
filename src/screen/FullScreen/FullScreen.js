import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

//

export default function HomeScreen({route}) {
  const {params} = route;

  console.log(params.url);
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={'#030318'} />
      <Text>Download Screen</Text>
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
