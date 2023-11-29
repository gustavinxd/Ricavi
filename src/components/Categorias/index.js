import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { categoryData } from '../../constants/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../colors';

export default function Categorias({ categories, activeCategory, handleChangeCategory }) {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator
        style={{ marginVertical: 5 }}
        contentContainerStyle={{
          paddingHorizontal: 10
        }}
      >
        {categoryData.map((category, index) => {
          let isActive = category.strCategory == activeCategory;
          let activeButtonClass = isActive ? 'red' : 'gray';

          return (
            <TouchableOpacity
              key={index}
              style={{ flex: 1, marginVertical: 4, }}
            >
            {/* Estilização do style não pega */}
              <View style={{ borderColor: colors.primary,} + activeButtonClass}>
                <Image
                  source={{
                    uri: category.strCategoryImg,
                  }}
                  style={{
                    width: hp(10),
                    height: hp(10),
                    borderRadius: 200,
                  }}
                />
                <Text style={{color: colors.primary, textAlign: 'center', fontSize: (hp(2.5))}}>{category.strCategory}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
