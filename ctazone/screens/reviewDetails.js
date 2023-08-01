import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

//  파라미터 navigation은 React Navigation 라이브러리에 내장되어 있는 기능으로 제공
export default function ReviewDetails({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>{ navigation.getParam('title') }</Text>
            <Text>{ navigation.getParam('body') }</Text>
            <Text>{ navigation.getParam('rating') }</Text>
        </View>
    )
}