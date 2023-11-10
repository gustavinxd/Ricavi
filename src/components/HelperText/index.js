import { StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../colors';

export default function HelperText({ helperText }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="alert-circle-outline"
        size={16}
        color={colors.error}
      />
      <Text style={styles.errorText}>{helperText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center'
  },
  errorText: {
    color: colors.error,
    fontFamily: 'Inter_400Regular',
    fontStyle: 'italic'
  }
});
