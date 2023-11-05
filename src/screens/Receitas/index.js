import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native';
import { Card } from 'react-native-paper';
import colors from '../../colors/index';

export default function Receitas({ navigation }) {
  const handleCardPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.top}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Receitas</Text>
          </View>
        </View>
        <>
          {receitasBovina.map((carne, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCardPress(carne.url)}
            >
              <View style={styles.Card}>
                <Card.Cover source={{ uri: carne.uri }} style={styles.image} />
                <View style={styles.containerText}>
                  <Text style={styles.titleCard}>{carne.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  containerTitle: {
    flexDirection: 'column',
    marginTop: 15,
    paddingLeft: 20
  },
  title: {
    color: colors.light,
    fontSize: 30,
    fontFamily: 'JuliusSansOne_400Regular',
  },
  Card: {
    borderRadius: 8,
    margin: '5%',
    flexDirection: 'row',
    backgroundColor: colors.light,
    width: '90%'
  },
  titleCard: {
    padding: 10,
    alignItems: 'center',
    fontFamily: 'InriaSans_700Bold',
    fontSize: 18
  },
  containerText: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center'
  },
});
