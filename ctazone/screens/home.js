import React, { useState, useEffect }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons, Foundation } from '@expo/vector-icons';
import Form from './form';

export default function Home({ navigation }) {
    const [modalOpen, setModalOepn] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'QR 기기 인식', rating: 5, body: 'Iorem ipsum', key: '1' },
        { title: '기기 온도 체크', rating: 4, body: 'Iorem ipsum', key: '2' },
        { title: '문제 기기 관리', rating: 3, body: 'Iorem ipsum', key: '3' },
    ]);

    const pressHandler = (key) => {
        if(key === '1')
            navigation.navigate('QRScan');
        else if(key === '2')
            navigation.navigate('ColorDetect');
        else
            navigation.navigate('ProblemAdmin');
      }

      const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
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
                    <Form />
                </View>
            </Modal>

            <Foundation 
                name='clipboard-pencil'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOepn(true)}
            />

             <FlatList
                data={reviews}
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


// [알아두면 좋은 문법 차이]
    // onPress={() => submitHandler(text)}: 
    // 이 표현 방식은 버튼이 클릭될 때마다 새로운 함수를 생성합니다. 
    // 이 함수 안에서 submitHandler(text)가 호출되는 구조입니다. 
    // 예를 들어, 버튼이 10번 클릭되면 10개의 새로운 함수가 생성됩니다. 
    // 이렇게 새로운 함수가 생성되는 것은 메모리 상에서 약간의 오버헤드가 발생하게 됩니다. 
    // 하지만 대부분의 경우에는 버튼 클릭 횟수가 많지 않기 때문에 성능적으로 큰 문제가 되지 않습니다.

    // onPress={submitHandler(text)}: 
    // 이 표현 방식은 렌더링 시점에 즉시 submitHandler(text) 함수를 호출합니다. 
    // 이때 submitHandler(text) 함수가 반환하는 값이 onPress에 할당됩니다. 
    // 이렇게 표현하면 문제가 발생합니다. 왜냐하면 렌더링할 때마다 submitHandler(text) 함수가 실행되기 때문입니다. 
    // 예를 들어, 버튼이 화면에 표시될 때마다 submitHandler(text) 함수가 실행되면서 의도하지 않은 동작이 발생할 수 있습니다. 
    // 버튼을 클릭하지 않아도 submitHandler(text) 함수가 실행되고, 이는 원하지 않는 결과를 초래할 수 있습니다.

    // 따라서 onPress={() => submitHandler(text)}를 사용하는 것이 더 바람직합니다. 
    // 이 방식은 버튼을 클릭할 때만 새로운 함수가 생성되고 submitHandler(text) 함수가 실행됩니다. 
    // 이렇게 하면 불필요한 함수 생성과 호출을 방지하면서 원하는 동작을 올바르게 수행할 수 있습니다.