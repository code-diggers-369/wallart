import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

//

import Card from '../../../components/HomeCard/HomeCard';

export default function HorizontalBar() {
  return (
    <View style={style.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {},
});
