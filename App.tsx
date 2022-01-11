import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import DocViewer from './src/DocViewer';
import PdfViewer from './src/PdfViewer';

const Stack = createNativeStackNavigator<ParamListBase>();

function App() {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Doc Viewer" component={DocViewer} />
        <Stack.Screen name="PDF Viewer" component={PdfViewer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
