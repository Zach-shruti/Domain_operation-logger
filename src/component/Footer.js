import React from 'react';
import { View, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}></View>
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
});

export default Footer;
