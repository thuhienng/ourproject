import Signin from './components/Signin'
import {createStackNavigator}  from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import App from './App';
const StackNavigation = createStackNavigator({
    //Screens
    
    Signin: {
        screen: Signin
    },
    App: {
        screen: App
    },
},
{
    //setting
    initiaRouteName: 'Signin'
})

export default createAppContainer(StackNavigation)
