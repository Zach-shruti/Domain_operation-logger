import React from 'react';
import { View, StyleSheet } from 'react-native';

const Circle = () => {
  return (
    <View style={styles.circleContainer}>
      <View style={styles.circle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 30,
    paddingBottom: 30,
  },
  circle: {
    height: 70,
    width: 70,
    backgroundColor: '#D8F1EB',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Circle;
