import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import RecipesCard from './RecipesCard';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import Loading from '../Loading';

export default function Recipes({ meals, categories }) {
  const navigation = useNavigation();

  return (
    <View style={styles.viewContainer}>
      <Text
        style={{
          fontSize: hp(2)
        }}
      >
        {meals.length} Receitas
      </Text>
      <View>
        {categories.length == 0 || meals.length == 0 ? (
          <Loading size="large" />
        ) : (
          <MasonryList
            data={meals}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => (
              <RecipesCard item={item} index={i} navigation={navigation} />
            )}
            onEndReachedThreshold={0.1}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    marginLeft: 4,
    marginRight: 4
  }
});
