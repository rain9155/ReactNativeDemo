import React from "react";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
  SafeAreaView,
  useColorScheme,
  StatusBar
} from 'react-native';

function NativeModuleScreen() : React.ReactElement {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </SafeAreaView>
  );
}

export default NativeModuleScreen;