import React, {useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import ManageWallpaper, {TYPE} from 'react-native-manage-wallpaper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BottomOption({
  isBottomMenuShown,
  setIsBottomMenuShown,
  url,
}) {
  const popupRef = useRef(null);

  useEffect(() => {
    if (isBottomMenuShown) {
      popupRef.current.open();
    } else {
      popupRef.current.close();
    }
    return () => {};
  }, [isBottomMenuShown]);

  const setWallpaper = async selectedWallpaperType => {
    try {
      ToastAndroid.show('Wait For Few Moment...', ToastAndroid.LONG);
      ManageWallpaper.setWallpaper(
        {
          uri: url,
        },
        () => {
          ToastAndroid.show('Done', ToastAndroid.SHORT);
          console.log('Complete');

          popupRef.current.close();
        },
        selectedWallpaperType,
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <RBSheet
      ref={popupRef}
      height={200}
      openDuration={250}
      closeOnDragDown={true}
      closeOnPressMask={false}
      onClose={() => setIsBottomMenuShown(false)}
      customStyles={{
        container: {
          // justifyContent: 'center',
          // alignItems: 'center',
        },
      }}>
      <Text style={{textAlign: 'center', fontSize: 20}}>
        Set Wallpaper For Screen
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => {
            setWallpaper(TYPE.HOME);
          }}>
          <Ionicons name="home-outline" color={'#000'} size={40} />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => {
            setWallpaper(TYPE.LOCK);
          }}>
          <Ionicons name="lock-closed-outline" color={'#000'} size={40} />
          <Text>Lock</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => {
            setWallpaper(TYPE.BOTH);
          }}>
          <Ionicons name="copy-outline" color={'#000'} size={40} />
          <Text>Both</Text>
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
}
