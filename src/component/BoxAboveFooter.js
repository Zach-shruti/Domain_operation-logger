import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxAboveFooter = () => {
  return (
    <View style={styles.topRectangle}>
      <View style={styles.innerRectangle}>
        <Text style={styles.innerRectangleText}>Activity_name</Text>
      </View>
      <View style={styles.innerRectangleBelow}>
        <Text style={styles.innerRectangleBelowText}>Date</Text>
      </View>
      <View style={styles.rightCircle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  topRectangle: {
    height: 75,
    width: 350,
    backgroundColor: '#D8F1EB',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10,
    position: 'absolute',
    bottom: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRectangle: {
    height: 22,
    width: 138,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    position: 'absolute',
    top: 10,
    left: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  innerRectangleText: {
    fontSize: 12,
    color: '#000000',
    marginLeft: 10,
  },
  innerRectangleBelow: {
    height: 22,
    width: 138,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    position: 'absolute',
    top: 42,
    left: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  innerRectangleBelowText: {
    fontSize: 12,
    color: '#000000',
    marginLeft: 10,
  },
  rightCircle: {
    height: 27,
    width: 27,
    backgroundColor: '#FFFFFF',
    borderRadius: 13.5,
    position: 'absolute',
    right: 50,
    top: 22,
  },
});

export default BoxAboveFooter;
