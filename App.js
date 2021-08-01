import React from 'react';
import {View, Text} from 'react-native';

// import routes
import Route from './src/routes/index';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Route />
    </View>
  );
}
