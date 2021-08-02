import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function HomeCard() {
  return (
    <View style={style.container}>
      <Image
        style={style.backgroundImage}
        source={{
          uri: 'https://i0.wp.com/images.unsplash.com/photo-1500625597061-d472abd2afbb?ixlib=rb-1.2.1&w=1000&q=80',
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
