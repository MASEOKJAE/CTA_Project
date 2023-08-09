import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function From() {
    
    return(
        <View style={globalStyles.container}>
            <Formik
                // initialValues: 초기 값으로서, 폼 내부의 필드들의 초기 상태를 정의
                initialValues={{ name: '', contents: '', state: '' }}
                // onSubmit: 제출(Submit) 이벤트가 발생했을 때 실행되는 콜백 함수
                onSubmit={(values) => {
                    console.log(values);
                }} 
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='기기 번호'
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder='문제 내용'
                            onChangeText={props.handleChange('contents')}
                            value={props.values.contents}
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder='상태'
                            onChangeText={props.handleChange('state')}
                            value={props.values.state}
                        />

                        <Button title='submit' color='maroon' onPress={props.handleSubmit} />
                    </View>    
                )}    
            </Formik>
        </View>
    )
}