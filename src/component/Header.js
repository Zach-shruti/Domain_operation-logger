import React from 'react';
import { View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.flexSpace}></View>
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
});



export default Header;

