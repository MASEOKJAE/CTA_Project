import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';

// 가장 먼저 선언되어 있는 Screen이 default screen으로 자동 설정 => Home (Default Screen)
// screen을 사용할 때는 선언해준 이름을 사용한다. "Home:" 이렇게 작성했다면 "Home" 사용
const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About GameZone',
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    // 모든 스크린의 디폴터 값을 설정
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default AboutStack;