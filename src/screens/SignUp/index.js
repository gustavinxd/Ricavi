import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image
} from 'react-native';
import colors from '../../colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useThemeContext } from '../../contexts/theme';
import SubmitButton from './../../components/Buttons/SubmitButton/index';

export default function SignUpPage({ navigation }) {
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.light : colors.black;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: themeColor }]}>
      <View style={styles.backgroundPage} />
      <View style={styles.contentSection}>
        <Image source={require('../../../assets/img/logoRICAVI.png')} style={{top: '-5%'}} />

        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Login</Text>

          <View style={styles.inputSection}>
            <TextInput style={[styles.input, {borderTopLeftRadius: 8, borderTopRightRadius: 8}]} placeholder='E-mail' placeholderTextColor={colors.grey}/>
            <TextInput style={[styles.input]} placeholder='Senha' placeholderTextColor={colors.grey} />
            <TextInput style={[styles.input, {borderBottomLeftRadius: 8, borderBottomRightRadius: 8}]} placeholder='Confirme a senha' placeholderTextColor={colors.grey} />
          </View>
        </View>

        <SubmitButton onPress={() => navigation.navigate('SignIn')} btnTitle='Entrar' btnColor='grey' style={{position: 'absolute', bottom: '10%', elevation: 5}}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  backgroundPage: {
    width: '150%',
    height: '65%',
    borderBottomLeftRadius: 999,
    borderBottomRightRadius: 999,
    position: 'absolute',
    backgroundColor: colors.primary
  },
  contentSection: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  },
  formCard: {
    width: '85%',
    backgroundColor: colors.black,
    padding: 30,
    paddingVertical: 45,
    gap: 25,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 8,
    top: '-25%'
  },
  formTitle: {
    fontFamily: 'JuliusSansOne_400Regular',
    color: colors.light,
    fontSize: 40,
  },
  inputSection: {
    width: '90%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 3
  },
  input: {
    width: '100%',
    backgroundColor: colors.light,
    padding: 10,
    paddingLeft: 20,
    color: colors.black,
    fontFamily: 'Inter_400Regular',
    fontSize: 15
  }
});
