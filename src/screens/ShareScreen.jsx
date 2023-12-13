import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Share } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ShareScreen = ({ navigation }) => {
  const shareToTwitter = () => {
    const twitterUrl = 'https://twitter.com/intent/tweet?text=Check%20out%20Meal%20Mate%20App%21%20%F0%9F%8D%94%20http%3A%2F%2Fwww.MealMate.com';
    Linking.openURL(twitterUrl);
  };

  const shareToFacebook = () => {
    const facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.MealMate.com';
    Linking.openURL(facebookUrl);
  };

  const shareToInstagram = () => {
    const instagramUrl = 'https://www.instagram.com/';
    Linking.openURL(instagramUrl);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Meal Mate: ' + '\n'+ 'Please share our App with your friends!' + '\n' + 'http://www.MealMate.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('shared with activity type of: ' + result.activityType + '');
        } else {
          console.log('shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ImageBackground source={require('../../assets/splash.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.socialMediaButton} onPress={shareToTwitter}>
          <Icon name="twitter" size={30} color="#1DA1F2" />
          <Text style={styles.buttonText}>Twitter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialMediaButton} onPress={shareToFacebook}>
          <Icon name="facebook" size={30} color="#1877F2" />
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialMediaButton} onPress={shareToInstagram}>
          <Icon name="instagram" size={30} color="#E4405F" />
          <Text style={styles.buttonText}>Instagram</Text>
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity style={styles.button} onPress={onShare}>
          <Icon name="share" size={30} color="#007BFF" />
          <Text style={styles.buttonText}>Share MealMate</Text>
        </TouchableOpacity>

        <Text style={styles.screenText}>Share the App with Your Friends!</Text>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  screenText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
  socialMediaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ShareScreen;
