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
import React, { useEffect, useState } from 'react'
  
export default function Receitas({ navigation }) {
  const APP_ID = '1d1560ee';
  const APP_KEY = '3e3366df0ee22599320ad1483327e49f';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query])
  const getRecipes = async () => {
    const response = await fetch
          (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data);
  
  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Text style={styles.title}>Receitas</Text> */}

      </ScrollView>
    </View>
  );

//   return (
//     <div className="App">
//       <form className="search-form" onSubmit={getSearch}  >
//         <input className="search-bar" type="text" value={search}
//              onChange={updateSearch} />
//         <button className="search-button" type="submit" >
//              Search
//         </button>
//       </form>
//       <div className="recipes">
//         {recipes.map(recipe => (
//           <Recipe
//             key={recipe.recipe.label}
//             title={recipe.recipe.label}
//             calories={recipe.recipe.calories}
//             image={recipe.recipe.image}
//             ingredients={recipe.recipe.ingredients}
//           />
  
//         ))}
//       </div>
  
//     </div>
//   );
// }
  
export default App;

