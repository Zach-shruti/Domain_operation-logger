import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image
        source={require('./src/picons/domain.png')}
        style={styles.footerIcon}
        resizeMode="contain" // Ensure the image scales properly
      />
      <Image
        source={require('./src/picons/operation.png')}
        style={styles.footerIcon}
        resizeMode="contain" // Ensure the image scales properly
      />
      <Image
        source={require('./src/picons/tivity.png')}
        style={styles.footerIcon}
        resizeMode="contain" // Ensure the image scales properly
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 60,
    width: '100%',
    backgroundColor: '#539083',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerIcon: {
    width: 23,   // Increase the width for better clarity
    height: 23,  // Increase the height for better clarity
  },
});

export default Footer;