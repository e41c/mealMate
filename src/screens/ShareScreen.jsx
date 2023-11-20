import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ShareScreen = () => {
  const shareToTwitter = () => {
    // Placeholder function, can be left empty
    console.log('Twitter button clicked');
  };

  const shareToFacebook = () => {
    // Placeholder function, can be left empty
    console.log('Facebook button clicked');
  };

  const shareToInstagram = () => {
    // Placeholder function, can be left empty
    console.log('Instagram button clicked');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Share Screen</Text>

      <TouchableOpacity style={styles.button} onPress={shareToTwitter}>
        <Icon name="twitter" size={30} color="#1DA1F2" />
        <Text style={styles.buttonText}>Twitter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={shareToFacebook}>
        <Icon name="facebook" size={30} color="#1877F2" />
        <Text style={styles.buttonText}>Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={shareToInstagram}>
        <Icon name="instagram" size={30} color="#E4405F" />
        <Text style={styles.buttonText}>Instagram</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0', // Light gray background color
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShareScreen;


// CODE WORKING, NEED INTERNET ACCESS FOR ANDRIOD EMULATOR
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Share from 'react-native-share';

// const ShareScreen = () => {
//   const shareToTwitter = async () => {
//     try {
//       await Share.shareSingle({
//         social: Share.Social.TWITTER,
//         url: 'https://your-share-url',
//         title: 'Share via Twitter',
//         message: 'Your custom message for Twitter',
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const shareToFacebook = async () => {
//     try {
//       await Share.shareSingle({
//         social: Share.Social.FACEBOOK,
//         url: 'https://your-share-url',
//         title: 'Share via Facebook',
//         message: 'Your custom message for Facebook',
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const shareToInstagram = async () => {
//     try {
//       await Share.shareSingle({
//         social: Share.Social.INSTAGRAM,
//         url: 'https://your-share-url',
//         title: 'Share via Instagram',
//         message: 'Your custom message for Instagram',
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.screenText}>Share Screen</Text>

//       <TouchableOpacity style={styles.button} onPress={shareToTwitter}>
//         <Icon name="twitter" size={30} color="#1DA1F2" />
//         <Text style={styles.buttonText}>Twitter</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={shareToFacebook}>
//         <Icon name="facebook" size={30} color="#1877F2" />
//         <Text style={styles.buttonText}>Facebook</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={shareToInstagram}>
//         <Icon name="instagram" size={30} color="#E4405F" />
//         <Text style={styles.buttonText}>Instagram</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   screenText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#e0e0e0', // Light gray background color
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     marginVertical: 10,
//     borderRadius: 10,
//   },
//   buttonText: {
//     marginLeft: 10,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default ShareScreen;
