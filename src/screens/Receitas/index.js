import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../colors';
import { TextInput } from 'react-native-gesture-handler';
import Categorias from '../../components/Categorias';
import axios from 'axios';

export default function Receitas() {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

  const handleChangeCategory = (category) => {
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (response && response.data) {
        setCategories(response.data.categories);
      }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 50
          }}
          style={styles.scroll}
        >
          <View style={styles.viewContainer}>
            <View>
              <Text style={styles.title}>Receitas</Text>
            </View>
            <Text style={styles.subTitle}>
              Seu companheiro culinário
              <Text style={styles.subDiff}> perfeito</Text>!
            </Text>
          </View>
          {/* Search Bar */}
          <View style={styles.viewInput}>
            <View style = {styles.viewSubInput}>
              <AntDesign name="search1" size={hp(3)}
              style={{ color:"gray"}}
              />
            </View>
            <TextInput
              placeholder='Busque sua comida preferida'
              style={styles.input}
            />
          </View>

          {/* Categorias */}
          <View>
            <Categorias />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
  },
  scroll: {
    paddingTop: 14,
    marginVertical: 6
  },
  viewContainer: {
    marginRight: 4,
    marginVertical: 1,
    marginBottom: 2,
    padding: 5,
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: hp(3.5),
    color: '#000',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: hp(3),
    color: '#000',
    fontWeight: '300'
  },
  subDiff: {
    color: colors.primary
  },
  viewInput: {
    marginLeft: 4,
    marginRight: 5,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 10,
    flexDirection: 'row',
    padding: 8,
  },
  viewSubInput: {
    backgroundColor: colors.light,
  
  },
  input: {
    flex: 1,
    marginBottom: 1,
  }
});