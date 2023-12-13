import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/splash.png')}
        style={styles.backgroundImage}
      />
      <Text style={styles.header}>About Page</Text>
      

      <View style={styles.memberContainer}>
        {renderMemberBox("Memember: Eric Grigor", "100668121")}
        {renderMemberBox("Memember: Chris Tri", "101335147")}
        {renderMemberBox("Memeber: Yaganeh Daneshparvar", "101383730")}
      </View>
      {/* Add information about your app/company */}
    </View>
  );
};

const renderMemberBox = (name, studentID) => (
  <View style={styles.memberBox} key={studentID}>
    <Text style={styles.memberName}>{name}</Text>
    <Text style={styles.memberID}>(Student ID: {studentID})</Text>
  </View>
);

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  backgroundImage: {
    width: window.width,
    height: window.height,
    resizeMode: 'cover',
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFF', // White text color
  },
  memberContainer: {
    marginTop: 20,
  },
  memberBox: {
    backgroundColor: 'rgba(224, 224, 224, 0.8)', // Semi-transparent light gray box background color
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFF', // White text color
  },
  memberID: {
    fontSize: 14,
    color: '#EEE', // Light gray text color
  },
});

export default AboutScreen;
