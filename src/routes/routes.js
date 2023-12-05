import { createStackNavigator } from '@react-navigation/stack';
import SignInPage from '../screens/SignIn';
import SignUpPage from '../screens/SignUp';
import Receitas from '../screens/Receitas';
import Details from '../screens/DetailRecipe';
import CustomHeader from '../components/CustomHeader';
import colors from '../colors';
import DetailRecipe from '../screens/DetailRecipe';

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
      <Stack.Screen name='Receitas' component={Receitas}/>
      <Stack.Screen name='DetailRecipe' component={DetailRecipe}/>
    </Stack.Navigator>
  );
}
