import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { categoryData } from '../../constants/index';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../colors';

export default function Categories({ activeCategory, handleChangeCategory }) {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 5 }}
        contentContainerStyle={{
          paddingHorizontal: 10
        }}
      >
        {categoryData.map((category, index) => {
          let isActive = category.strCategory == activeCategory;
          let activeButtonClass = isActive ? '#000' : 'gray';

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleChangeCategory(category.strCategory)}
              style={{ flex: 1, marginVertical: 4, }}
            >
            {/* Estilização do style não pega */}
              <View style={{ borderColor: colors.primary,} + activeButtonClass}>
                <Image
                  source={{
                    uri: category.strCategoryThumb,
                  }}
                  style={{
                    width: hp(10),
                    height: hp(10),
                    borderRadius: 200,
                  }}
                />
                <Text 
                    style={{color: colors.primary, textAlign: 'center', fontSize: (hp(2.5))}}>
                        {category.strCategory}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
