import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
  SafeAreaView,
  View,
  useColorScheme,
  StatusBar,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    marginHorizontal: '1%',
    marginTop: 6,
    minWidth: '48%',
    backgroundColor: 'oldlace',
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
    textAlign: 'center',
  }
});

type ButtonProps = {
  label: string,
  onPress?: () => void
};

function Button({ label, onPress } : ButtonProps): React.ReactElement {
  return (
    <TouchableOpacity 
      style={styles.button} 
      onPress={onPress}>
      <Text style={styles.buttonLabel}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function HomeScreen({ navigation } : any): React.ReactElement {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[
      backgroundStyle, 
      styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.row}>
        <Button 
          label="Welcome"
          onPress={()=>{ 
            console.log('press welcome button');
            navigation.navigate('Welcome');
          }}  
        />
        <Button 
          label="NativeModule"
          onPress={()=>{
            console.log('press nativeModule button');
            navigation.navigate('NativeModule');
          }}
        />
        <Button 
          label="NativeComponent"
          onPress={()=>{
            console.log('press nativeComponent button');
            navigation.navigate('NativeComponent');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;