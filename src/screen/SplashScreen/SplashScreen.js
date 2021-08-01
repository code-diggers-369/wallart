import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';

//
import Logo from '../../../assets/logo/final1.png';

export default function SplashScreen() {
  return (
    <View style={style.container}>
      <StatusBar hidden={true} />

      <Image style={style.img} source={Logo} />

      <Text style={style.text}>Wallart</Text>
      <Text style={style.indiaText}>🇮🇳 A Make In INDIA Initiative</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#030318',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  img: {
    height: 200,
    width: 200,
  },
  indiaText: {
    color: '#fff',
    position: 'absolute',
    bottom: 70,
  },
});
