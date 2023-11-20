import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Screen</Text>
      <View style={styles.memberContainer}>
        <View style={styles.memberBox}>
          <Text style={styles.memberName}>Eric Grigor</Text>
          <Text style={styles.memberID}>(Student ID: 100668121)</Text>
        </View>
        <View style={styles.memberBox}>
          <Text style={styles.memberName}>Chris Tri</Text>
          <Text style={styles.memberID}>(Student ID: 101335147)</Text>
        </View>
        <View style={styles.memberBox}>
          <Text style={styles.memberName}>Yaganeh Daneshparvar</Text>
          <Text style={styles.memberID}>(Student ID: 101383730)</Text>
        </View>
      </View>
      {/* Add information about your app/company */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F0F0F0', // Light gray background color
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333', // Dark gray text color
  },
  teamText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555', // Medium gray text color
  },
  memberContainer: {
    marginTop: 20,
  },
  memberBox: {
    backgroundColor: '#E0E0E0', // Light gray box background color
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Dark gray text color
  },
  memberID: {
    fontSize: 14,
    color: '#555', // Medium gray text color
  },
});

export default AboutScreen;
