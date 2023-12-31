import { createStackNavigator } from '@react-navigation/stack';
import SignInPage from '../screens/SignIn';
import SignUpPage from '../screens/SignUp';
import CustomHeader from '../components/CustomHeader';
import colors from '../colors';
import Home from './home.routes';

const Stack = createStackNavigator();

export default function StackRouter() {
  return (
    <Stack.Navigator initialRouteName='SignIn' screenOptions={({ navigation, route }) => {
        return {
          headerTitle: () => {
            return <CustomHeader navigation={navigation} route={route} />;
          },
          headerLeft: () => {
            return null;
          },
          headerStyle: {
            backgroundColor: colors.primary
          },
          headerShadowVisible: false
        };
      }}
    >
      <Stack.Screen name='SignIn' component={SignInPage} options={{
        headerShown: false
      }}/>
      <Stack.Screen name='SignUp' component={SignUpPage} options={{
        headerShown: false
      }}/>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
        />

    </Stack.Navigator>
  );
}
