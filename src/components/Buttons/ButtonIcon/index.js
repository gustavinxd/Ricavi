import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';
import { useThemeContext } from '../../../contexts/theme';

export default function ButtonIcon({ onPress, icon, colorButton = 'red', colorTheme, size, style }) {
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colorTheme : colors.light;

  return (
    <TouchableOpacity onPress={onPress} style={[{ ...style }]}>
      <MaterialCommunityIcons
        name={icon}
        color={colorButton === 'red' ? themeColor : colors.light}
        size={size}
      />
    </TouchableOpacity>
  );
}