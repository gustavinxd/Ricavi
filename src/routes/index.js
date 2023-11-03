import { NavigationContainer } from '@react-navigation/native';
import ThemeProvider from '../contexts/theme';
import StackRouter from './routes';

export default function RoutesApp() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StackRouter />
      </NavigationContainer>
    </ThemeProvider>
  );
}
