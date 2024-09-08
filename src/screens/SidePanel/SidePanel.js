import React from 'react';
import { View, StyleSheet } from 'react-native';

const SidePanel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftRectangle}>
        <View style={styles.header} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
  },
  leftRectangle: {
    width: 240,
    height: "100%",
    backgroundColor: '#D8F1EB',
    position: 'relative',
  },
  header: {
    width: '100%',
    height: 121,
    backgroundColor: '#ffffff', 
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default SidePanel;