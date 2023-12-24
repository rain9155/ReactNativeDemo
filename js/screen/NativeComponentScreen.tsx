import React from "react";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
  SafeAreaView,
  useColorScheme,
  StatusBar,
  PixelRatio,
  Platform,
} from 'react-native';
import TextView, { TextEventHandler } from "../native_components/TextView";

function NativeComponentScreen() : React.ReactElement {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const nativeEventHandler = Platform.select<TextEventHandler>({
    ios: {
      onSelect: (event)=>{
        console.log(`receive onSelect event, message = ${event.nativeEvent.message}`);
      }
    },
    android: {
      onClick: (event)=>{
        console.log(`receive onClick event, message = ${event.nativeEvent.message}`);
      }
    }
  });

  return (
    <SafeAreaView 
      style={[
        backgroundStyle,
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }
      ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <TextView
        style={{
          width: PixelRatio.getPixelSizeForLayoutSize(60),
          height: PixelRatio.getPixelSizeForLayoutSize(20),
        }}
        text="Hello World"
        textColor={isDarkMode ? '#ffffff' : '#000000'}
        {...nativeEventHandler}
      />
    </SafeAreaView>
  );
}

export default NativeComponentScreen;