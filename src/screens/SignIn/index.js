import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  Image
} from 'react-native';
import colors from '../../colors';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useThemeContext } from '../../contexts/theme';
import SubmitButton from './../../components/Buttons/SubmitButton';
import ButtonIcon from './../../components/Buttons/ButtonIcon/index';
import { TouchableOpacity } from 'react-native-gesture-handler';

const schema = z.object({
  email: z
    .string({
      required_error: 'Este campo é obrigatório'
    })
    .email('Por favor insira um email válido')
    .min(3, 'Por favor insira um email válido'),
  password: z
    .string({
      required_error: 'Este campo é obrigatório'
    })
    .min(5, 'Por favor insira uma senha válida')
});

export default function SignInPage({ navigation }) {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: zodResolver(schema)
  });

  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.light : colors.black;

  const submitForm = async (data) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: themeColor }]}>
      <ScrollView style={{ width: '100%', height: '100%' }}>
        <View style={styles.backgroundPage} />
        <View style={styles.contentSection}>
          <Image
            source={require('../../../assets/img/logoRICAVI.png')}
            style={{ top: '-5%' }}
          />

          <View style={styles.formCard}>
            <Text style={styles.formTitle}>Login</Text>

            <View style={styles.inputSection}>

              {/* Mensagem de erro caso o campo não esteja no formato correta para submit */}
              {errors.email && (
                <Text
                  style={{
                    color: colors.error,
                    fontFamily: 'Inter_400Regular'
                  }}
                >
                  {errors.email?.message}
                </Text>
              )}

              {/* Campo de usuário */}
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[
                      styles.input,
                      { borderTopLeftRadius: 8, borderTopRightRadius: 8 }
                    ]}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="E-mail"
                    placeholderTextColor={colors.grey}
                  />
                )}
                name="email"
              />

              {/* Campo de senha */}
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[
                      styles.input,
                      { borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }
                    ]}
                    secureTextEntry
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Senha"
                    placeholderTextColor={colors.grey}
                  />
                )}
                name="password"
              />

              {/* Mensagem de erro caso o campo não esteja no formato correta para submit */}
              {errors.password && (
                <Text
                  style={{
                    color: colors.error,
                    fontFamily: 'Inter_400Regular',
                    textAlign: 'left'
                  }}
                >
                  {errors.password?.message}
                </Text>
              )}
            </View>
          </View>

          <SubmitButton
            onPress={handleSubmit(submitForm)}
            btnTitle="Entrar"
            btnColor="grey"
            style={{ position: 'absolute', bottom: '12%', elevation: 5 }}
          />

          <View style={{position: 'absolute', flexDirection: 'row', bottom: '7%', gap: 1}}>
            <Text>Não possui cadastro?</Text>
            <TouchableOpacity>
              <Text>Cadastra-se aqui.</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row', gap: 10, position: 'absolute', bottom: '2%'}}>
            <ButtonIcon icon='github'/>
            <ButtonIcon icon='google'/>
            <ButtonIcon icon='facebook'/>
          </View>
        </View>
      </ScrollView>
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
    height: '100%',
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
    top: '-22%'
  },
  formTitle: {
    fontFamily: 'JuliusSansOne_400Regular',
    color: colors.light,
    fontSize: 40
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
