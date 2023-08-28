import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card'

// 파라미터 navigation은 React Navigation 라이브러리에 내장되어 있는 기능으로 제공
// { navigation }과 같은 형태로 중괄호를 사용하여 전달하는 것은 ES6의 객체 비구조화 할당 문법
//      - 이를 이용하면 객체 내부의 특정 프로퍼티를 추출하여 변수로 사용
export default function ProblemDetails({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ navigation.getParam('name') }</Text>
                <Text>{ navigation.getParam('contents') }</Text>
                <Text>{ navigation.getParam('state') }</Text>
            </Card>
        </View>
    )
}