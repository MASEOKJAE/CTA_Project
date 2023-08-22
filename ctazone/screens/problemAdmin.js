import React, {useState, useEffect} from "react";
import { StyleSheet, View, Modal, TouchableOpacity, FlatList, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons, Foundation } from '@expo/vector-icons';
import Form from './form';
import Card from '../shared/card';

export default function ProblemAdmin({ navigation }) {
    const [modalOpen, setModalOepn] = useState(false);
    const [problems, setProblems] = useState([
        { name: '맥북 24인치', contents: 'Test contents', state: '발열이 발생함', key: '1' },
    ]);

    // 화살표 함수 설명
    // const functionName = (parameters) => {
    //      함수 내용
    // };
    //          functionName: 함수의 이름을 지정, 생략 가능. 이름이 지정되지 않으면 익명 함수로 사용
    //          parameters: 함수의 매개변수 목록을 지정. 0개 이상의 매개변수를 받기 가능
    //          =>: 화살표 문법을 나타냄
    //          { ... }: 함수의 내용을 감싸는 중괄호 블록, 함수가 하나의 표현식만 반환하는 경우 중괄호와 return 키워드를 생략
    
    const addProblem = (problem) => {
        problem.key = Math.random().toString();
        setProblems((currentProblems) => {
            return [problem, ...currentProblems]
        });
        setModalOepn(false);
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ProblemDetails', item)}>
            <Card>
                <Text style={globalStyles.titleText}>{ item.name }</Text>
            </Card>
        </TouchableOpacity>
      );

      const keyExtractor = (item) => item.key;

    return (
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home Screen</Text>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => pressHandler()} 
            >
                <Text style={globalStyles.buttonText}>Review Dets</Text>
            </TouchableOpacity> */}
            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        // 전개 연산자(배열이나 객체의 요소를 "전개"하여 새로운 배열이나 객체를 생성하거나 함수에 인자로 전달) 예시
                        // const obj1 = { a: 1, b: 2 };
                        // const obj2 = { b: 3, c: 4 };
                        // const combinedObj = { ...obj1, ...obj2 };
                        // console.log(combinedObj); // { a: 1, b: 3, c: 4 }
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                        onPress={() => setModalOepn(false)}
                    />
                    <Form addProblem={addProblem} />

                </View>
            </Modal>

            <Foundation 
                name='clipboard-pencil'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOepn(true)}
            />

            <FlatList
                data={problems}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose:  {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
})  