import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        paddding: 10,
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    button: {
        backgroundColor: 'coral', // 배경 색상 설정
        padding: 10,
        borderRadius: 5,
      },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center', // 버튼 텍스트를 가운데로 정렬
    },
});