import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const KeyValueBox = () => {
  return (
    <View style={styles.boxRectangle}>
      <View style={styles.innerRectangle}>
        <Text style={styles.rectangleText}>Key</Text>
      </View>
      <View style={[styles.innerRectangle, { top: 55 }]}>
        <Text style={styles.rectangleText}>Value</Text>
      </View>
      <View style={styles.bottomRectangle}>
        <Text style={styles.bottomRectangleText}>Save</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxRectangle: {
    height: 140,
    width: 240,
    backgroundColor: '#D8F1EB',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRectangle: {
    height: 30,
    width: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    position: 'absolute',
    top: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  bottomRectangle: {
    height: 26,
    width: 75,
    backgroundColor: '#539083',
    borderRadius: 10,
    position: 'absolute',
    bottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleText: {
    fontSize: 12,
    color: '#000000',
  },
  bottomRectangleText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});

export default KeyValueBox;