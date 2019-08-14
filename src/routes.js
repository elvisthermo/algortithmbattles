import { createAppContainer,createStackNavigator} from 'react-navigation'

import Select from './pages/Select';
import Main from './pages/Main';

export default createAppContainer(
    createStackNavigator({
        Login: Select,
        Main,
    })
);
