import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default function SearchBar() {
  return <TextInput style={style.input} placeholder="useless placeholder" />;
}

const style = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#343459',
    backgroundColor: '#1d1d33',
    borderRadius: 15,
  },
});
