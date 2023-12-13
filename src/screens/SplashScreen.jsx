import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a loading delay and navigate to the main screen
    const timer = setTimeout(() => {
      navigation.replace('Main'); // Replace with the name of your main navigation stack
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/splash.png')}
        style={styles.logo}
      />
    </View>
  );
};

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: window.width,
    height: window.height,
    resizeMode: 'cover',
  },
});

export default SplashScreen;
