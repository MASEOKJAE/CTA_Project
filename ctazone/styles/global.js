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
    buttonContainer: {
        backgroundColor: 'skyblue',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        alignItems: 'center',
      },
      input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
      }
});