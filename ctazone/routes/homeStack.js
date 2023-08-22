import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import QRScan from '../screens/qrScan';
import ColorDetect from '../screens/colorDetect';
import ProblemAdmin from '../screens/problemAdmin';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';
import ProblemDetails from '../screens/problemDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        }
    },
    QRScan: {
        screen: QRScan,
        navigationOptions: {
            title: '설비 정보 관리',
        }
    },
    ColorDetect: {
        screen: ColorDetect,
        navigationOptions: {
            title: '설비 온도 체크',
        },
    },
    ProblemAdmin: {
        screen: ProblemAdmin,
        navigationOptions: {
            title: '문제 기기 관리',
        },
    },
    ProblemDetails: {
        screen: ProblemDetails,
        navigationOptions: {
            title: '문제 세부 내용',
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    // 모든 스크린의 디폴트 값을 설정
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80 }
    }
});

export default createAppContainer(HomeStack);
