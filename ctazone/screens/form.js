import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function From({ addProblem }) {
    
    return(
        <View style={globalStyles.container}>
            <Formik
                // initialValues: 초기 값으로서, 폼 내부의 필드들의 초기 상태를 정의
                initialValues={{ name: '', contents: '', state: '' }}
                // onSubmit: 제출(Submit) 이벤트가 발생했을 때 실행되는 콜백 함수
                onSubmit={(values) => {
                    addProblem(values);
                }} 
            >
                {/*  'props' 변수에는 Formik 라이브러리가 제공하는 컴포넌트와 함수들이 포함

                      props.values: 폼 내의 입력 필드들의 현재 값들을 객체로 소유
                        이 객체는 initialValues로 설정한 필드들과 동일한 이름으로 필드별 값이 저장

                      props.handleChange: 폼 내의 입력 필드들의 값이 변경될 때 호출되는 함
                        이 함수를 이용하여 각 필드의 값을 업데이트

                      props.handleSubmit: 폼 제출 시 실행되는 함수
                        이 함수를 호출하면 onSubmit 속성에 전달한 콜백 함수가 실행되며, 현재 입력된 폼 데이터가 전달
                    
                */}
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