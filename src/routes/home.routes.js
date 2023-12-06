import { createStackNavigator } from '@react-navigation/stack';
import SignInPage from '../screens/SignIn';
import SignUpPage from '../screens/SignUp';
import ReceitasHome from '../screens/Receitas/Home';
import ReceitasBovina from '../screens/Receitas/Bovina';
import ReceitasFrango from '../screens/Receitas/Frango/index';
import ReceitasSuina from '../screens/Receitas/Suína/index';
import CustomHeader from '../components/CustomHeader';
import colors from '../colors';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      initialRouteName="Receitas"
      screenOptions={({ navigation, route }) => {
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
      <Stack.Screen name="Receitas" component={ReceitasHome} />
      <Stack.Screen name="Bovina" component={ReceitasBovina}  />
      <Stack.Screen name="Frango" component={ReceitasFrango}  />
      <Stack.Screen name="Suína" component={ReceitasSuina}  />
    </Stack.Navigator>
  );
}
