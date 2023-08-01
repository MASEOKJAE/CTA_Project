import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import QRScan from '../screens/qrScan';
import ColorDetect from '../screens/colorDetect';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'CTA Home',
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
    }
}

const HomeStack = createStackNavigator(screens, {
    // 모든 스크린의 디폴트 값을 설정
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: 'skyblue', height: 80 }
    }
});

export default createAppContainer(HomeStack);