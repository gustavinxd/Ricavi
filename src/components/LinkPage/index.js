import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../colors';

export default function LinkPage({ descLink, textLink, onPress }) {
  return (
    <View style={{ flexDirection: 'row', gap: 2 }}>
      <Text style={styles.text}>{descLink}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.text, { color: colors.info }]}>{textLink}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'JuliusSansOne_400Regular',
    color: colors.black
  }
});
