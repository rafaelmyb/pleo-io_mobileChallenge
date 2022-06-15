/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React from 'react';
import {Text} from 'react-native';

import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
// import RNFS from 'react-native-fs';

import {Container, ButtonTakePicture} from './styles';

export default function Camera({route}: any) {
  const {idExpense, setCapture} = route.params;
  const [{cameraRef}, {takePicture}] = useCamera();

  async function handleTakePicture() {
    try {
      const data = await takePicture();
      const filePath = data.uri;

      await axios.post(`http://192.168.100.102:3000/expenses/${idExpense}`, {
        receipt: filePath,
      });
      setCapture(filePath);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <ButtonTakePicture onPress={() => handleTakePicture()}>
          <Text
            style={{
              textAlign: 'center',
            }}>
            Take Picture
          </Text>
        </ButtonTakePicture>
      </RNCamera>
    </Container>
  );
}
