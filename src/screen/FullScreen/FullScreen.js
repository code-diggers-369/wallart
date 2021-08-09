import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
  Image,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import Ionicons from 'react-native-vector-icons/Ionicons';

//

const {width, height} = Dimensions.get('screen');

// import screen
import BottomOption from './BottomOption/BottomOption';

export default function HomeScreen({route}) {
  const [isBottomMenuShown, setIsBottomMenuShown] = useState(false);
  //

  const {params} = route;
  let {dirs} = RNFetchBlob.fs;

  const wallartDirPath = `${dirs.SDCardDir}/wallart`;

  const getImageName = () => {
    const index = params.url.lastIndexOf('/');

    const name = params.url.slice(index + 1);

    return name;
  };

  const downloadImg = async () => {
    try {
      const imgName = getImageName();

      await requestStoragePermission();
      await makeDir();

      ToastAndroid.show('Downloading...', ToastAndroid.LONG);

      const download = await RNFetchBlob.config({
        path: `${wallartDirPath}/${imgName}`,
      }).fetch('GET', params.url);

      if (download.info().status == 200) {
        console.log('Download Complete');

        ToastAndroid.show('Download Done', ToastAndroid.SHORT);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const makeDir = async () => {
    try {
      const isDirExists = await RNFetchBlob.fs.exists(wallartDirPath);

      if (!isDirExists) {
        await RNFetchBlob.fs.mkdir(wallartDirPath);
        console.log('dir created');
      } else {
        console.log('dir already exist');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: '',
          message: 'Storage',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the storage');
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={'#030318'} />

      <Image source={{uri: params.url}} style={style.backgroundImage} />

      <View
        style={[
          style.moreContainer,
          {opacity: 0.7, backgroundColor: '#030318'},
        ]}></View>

      <View style={style.moreContainer}>
        <TouchableOpacity style={style.button} onPress={() => downloadImg()}>
          <Ionicons name="download-outline" color={'#fff'} size={30} />
          <Text style={{color: '#fff'}}>Download</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button}
          onPress={() => setIsBottomMenuShown(true)}>
          <Ionicons name="image-outline" color={'#fff'} size={30} />
          <Text style={{color: '#fff'}}>Set Wallpaper</Text>
        </TouchableOpacity>
      </View>

      {/* bottom sheet */}
      <BottomOption
        isBottomMenuShown={isBottomMenuShown}
        setIsBottomMenuShown={setIsBottomMenuShown}
        url={params.url}
      />
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
  backgroundImage: {
    height: height,
    width: width,
  },
  moreContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
  },
});
