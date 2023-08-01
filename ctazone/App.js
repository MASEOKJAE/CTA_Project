import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Navigator from './routes/homeStack';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  const LoadingScreen = () => {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  
  export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
  
    useEffect(() => {
      // getFonts() 함수가 반환한 프라미스의 결과를 기다렸다가, 
      // 프라미스가 완료되면 setFontsLoaded(true)를 호출
      getFonts().then(() => setFontsLoaded(true));
    }, []);
  
    if (!fontsLoaded) {
      return <LoadingScreen />;
    } else {
      return <Navigator />;
    }
  }