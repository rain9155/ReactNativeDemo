import React from "react";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CalendarModule from "../native_modules/CalendarModule";
import {
  SafeAreaView,
  useColorScheme,
  StatusBar,
  Button,
  View
} from 'react-native';


function NativeModuleScreen() : React.ReactElement {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPress = () => {
    console.log("invoke createCalendarEvent");
    CalendarModule.createCalendarEvent('testName', 'testLocation', (error, eventId) => {
      if(error) {
        console.log("createCalendarEvent fail");
        return;
      }
      console.log(`createCalendarEvent success, eventId = ${eventId}`);
    });
  };

  const onPress2 = () => {
    console.log("invoke createCalendarEventWithPromise");
    CalendarModule.createCalendarEventWithPromise('testName', 'testLocation')
    .then((eventId) => {
      console.log(`createCalendarEvent success, eventId = ${eventId}`);
    }).catch((error) => {
      console.log("createCalendarEvent fail");
    });
  };

  return (
    <SafeAreaView style={[
      backgroundStyle,
      {
        flex:1
      }
    ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Button
        title="Create Calendar Event"
        color="#841584"
        onPress={onPress}
      />
      <View style={{margin: 10}}/>
      <Button
        title="Create Calendar Event (Promise)"
        color="#841584"
        onPress={onPress2}
      />
    </SafeAreaView>
  );
}

export default NativeModuleScreen;