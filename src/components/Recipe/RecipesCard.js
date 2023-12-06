import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";


export default function RecipesCard({ index, navigation, item }) {
  let isEven = index % 2 == 0;
  return (
    <View>
      <Pressable
        style={{
          width: '100%',
          paddingRight: isEven ? 8 : 0,
          marginBottom: 8
        }}
        styles={styles.press}
        // onPress={() => navigation.navigate('RecipeDetails', { ...item })}
      >
        <Image
          source={{
            uri: item.strMealThumb,
          }}
          style={{
            width: '100%',
            height: index % 3 == 0 ? hp(25) : hp(35),
            borderRadius: 35,
          }}
        />

        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: hp(20),
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />

        <Text style={styles.textMeal}>
          {item.strMeal.length > 20
            ? item.strMeal.slice(0, 20) + "..."
            : item.strMeal}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  press: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 4
  },
  textMeal: {
    fontSize: hp(2.2),
    marginLeft: 2,
    color: 'white',
    position: 'absolute',
    bottom: 7,
    left: 2
  }
});
