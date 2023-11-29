import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { categoryData } from '../../constants/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Categorias({ activeCategory, handleChangeCategory }) {
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
              style={{ flex: 1, marginVertical: 4,}}
            >
              <View style={{ borderRadius: 200, } + activeButtonClass}>
                <Image
                  source={{
                    uri: category.strCategoryImg,
                  }}
                  style={{
                    width: hp(10),
                    height: hp(10),
                    borderRadius: 100
                  }}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
