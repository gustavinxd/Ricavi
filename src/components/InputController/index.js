import { View, StyleSheet, TextInput } from 'react-native';
import colors from '../../colors';
import ButtonIcon from './../Buttons/ButtonIcon/';

export default function InputController({
  topHelper,
  error,
  style,
  hasAction,
  iconAction,
  onPressAction,
  ...props
}) {
  const errorStyle = error
    ? {
        borderColor: colors.error,
        borderWidth: 1,
        color: colors.error
      }
    : {
        color: colors.black
      };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, errorStyle, { ...style }]}
        placeholderTextColor={error ? colors.error : colors.grey}
        {...props}
      />
      {hasAction && (
        <ButtonIcon
          icon={iconAction}
          onPress={onPressAction}
          size={25}
          style={{ position: 'absolute', right: '6%', top: '25%' }}
          colorTheme={error ? colors.error : colors.black}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'relative'
  },
  input: {
    width: '100%',
    backgroundColor: colors.light,
    padding: 10,
    paddingLeft: 20,
    fontFamily: 'Inter_400Regular',
    fontSize: 15
  }
});
