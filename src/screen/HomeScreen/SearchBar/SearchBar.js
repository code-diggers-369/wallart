import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SearchBar() {
  return (
    <View style={style.container}>
      <MaterialCommunityIcons name="magnify" color={'#63637f'} size={30} />

      <TextInput
        style={style.input}
        placeholder="Search"
        placeholderTextColor="#5f5f89"
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#343459',
    backgroundColor: '#1d1d33',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginTop: -10,
    marginBottom: -10,
    width: 300,
  },
});
