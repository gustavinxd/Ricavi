import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../../colors/index';
import { useThemeContext } from '../../../contexts/theme';

export default function SubmitButton({
  btnTitle,
  onPress,
  btnColor = 'light',
  style
}) {
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.grey : colors.light;
  const themeColorText = theme === 'light' ? colors.light : colors.dark;

  const chooseColor =
    btnColor === 'grey'
      ?  themeColor
      : colors.light ;
      
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, { backgroundColor: chooseColor } , { ...style }]}
    >
      <Text
        style={[
          styles.btnTitle,
          btnColor === 'grey'
            ? { color: themeColorText }
            : { color: colors.primary }
        ]}
      >
        {btnTitle}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    padding: 10,
    borderRadius: 8,
  },
  btnTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
  }
});