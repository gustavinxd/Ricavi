import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image
} from 'react-native';
import colors from '../../colors';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { auth, signInWithEmailAndPassword } from '../../services/firebase';
import { useThemeContext } from '../../contexts/theme';
import SubmitButton from './../../components/Buttons/SubmitButton';
import ButtonIcon from './../../components/Buttons/ButtonIcon/index';
import InputController from './../../components/InputController/index';
import HelperText from './../../components/HelperText/index';
import LinkPage from './../../components/LinkPage/index';
import { useState } from 'react';



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

  const [visibility, setVisibility] = useState(true);

  const togglePasswordVisibility = () => {
    setVisibility((prevState) => !prevState);
  };
  
  const submitForm = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigation.navigate('Receitas');
    } catch (error) {
      console.error('Erro de login:', error.message);
      // Exibir mensagem de erro
    }
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
                <HelperText helperText={errors.email?.message} />
              )}

              {/* Campo de usuário */}
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputController
                    style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                    error={errors.email}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="E-mail"
                  />
                )}
                name="email"
              />

              {/* Campo de senha */}
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputController
                    style={{
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8
                    }}
                    error={errors.password}
                    secureTextEntry={visibility}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Senha"
                    hasAction
                    iconAction={visibility ? 'eye' : 'eye-off'}
                    onPressAction={togglePasswordVisibility}
                  />
                )}
                name="password"
              />

              {/* Mensagem de erro caso o campo não esteja no formato correta para submit */}
              {errors.password && (
                <HelperText helperText={errors.password?.message} />
              )}
            </View>
          </View>

          <SubmitButton
            onPress={handleSubmit(submitForm)}
            btnTitle="Entrar"
            btnColor="grey"
            style={styles.button}
          />

          <View style={styles.link}>
            <LinkPage
              descLink="Não possui cadastro?"
              textLink="Cadastra-se aqui."
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>

          <View style={styles.authButtons}>
            <ButtonIcon icon="github" size={30} colorTheme={colors.black} />
            <ButtonIcon icon="google" size={30} colorTheme={colors.black} />
            <ButtonIcon icon="facebook" size={30} colorTheme={colors.black} />
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
    top: '-22%',
    elevation: 5,
    zIndex: 10
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
  button: {
    position: 'absolute',
    bottom: '12%',
    elevation: 5
  },
  link: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: '7%'
  },
  authButtons: {
    flexDirection: 'row',
    gap: 10,
    position: 'absolute',
    bottom: '2%'
  }
});
