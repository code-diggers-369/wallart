import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function HomeCard({path}) {
  return (
    <View style={style.container}>
      <Image
        style={style.backgroundImage}
        source={{
          uri: path,
        }}></Image>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderRadius: 40,
    marginLeft: 15,
  },
  backgroundImage: {
    height: 230,
    width: 150,
    borderRadius: 20,
  },
});
