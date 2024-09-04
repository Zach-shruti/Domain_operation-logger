import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('./picons/Activity.png')} style={styles.icon} />
      <View style={styles.flexSpace}></View>
      <Image
        source={require('./picons/search.png')}
        style={[styles.icon, styles.largeIcon]} // Apply additional styling here
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#D8F1EB',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  flexSpace: {
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  largeIcon: {
    width: 24, // Adjust the width for the larger icon
    height: 24, // Adjust the height for the larger icon
  },
});

export default Header;
