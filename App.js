import React from 'react';
import { useFonts } from 'expo-font';
import {
  RobotoCondensed_300Light,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold
} from '@expo-google-fonts/roboto-condensed';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { JuliusSansOne_400Regular } from '@expo-google-fonts/julius-sans-one';
import RoutesApp from './src/routes/routes';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    RobotoCondensed_300Light,
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
    JuliusSansOne_400Regular,
    Inter_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <RoutesApp />;
}
