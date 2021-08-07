import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Axios from 'axios';
import {useNavigation} from '@react-navigation/native';
//

import Card from '../../../components/HomeCard/HomeCard';

export default function HorizontalBar({id}) {
  const [postData, setPostData] = useState([]);
  const url = 'https://wallarthp.000webhostapp.com/';

  //
  const navigation = useNavigation();

  useEffect(async () => {
    const {data} = await Axios.get(
      `https://wallarthp.000webhostapp.com/api/getdata?category_id=${id}&page_no=${1}`,
    );

    setPostData(data);

    return () => {};
  }, []);
  return (
    <View style={style.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {postData.map((list, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                navigation.navigate('FullScreen', {
                  url: url + list.path,
                });
              }}>
              <Card path={url + list.path} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {},
});
