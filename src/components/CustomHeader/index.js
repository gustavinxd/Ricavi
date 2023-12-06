import { StyleSheet, View } from 'react-native';
import BackButton from '../Buttons/BackButton/index';
import ButtonIcon from './../Buttons/ButtonIcon/index';
import colors from '../../colors';

export default function CustomHeader({
  navigation,
  route,
  children,
  removeBackButton
}) {
  const BackButtonSet = removeBackButton ? 'flex-end' : 'space-between';
  return (
    <View style={styles.container}>
      <View
        style={[styles.containerButtons, { justifyContent: BackButtonSet }]}
      >
        {removeBackButton ? null : (
          <BackButton navigation={navigation} route={route} />
        )}
        <ButtonIcon icon='logout' size={30} colorTheme={colors.light} />
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  containerButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});
