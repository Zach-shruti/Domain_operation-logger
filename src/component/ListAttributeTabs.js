import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListAttributeTabs = () => {
  return (
    <View style={styles.rectangleContainer}>
      <View style={styles.smallRectangle}>
        <Text style={styles.smallRectangleText}>List</Text>
      </View>
      <View style={styles.smallRectangle}>
        <Text style={styles.smallRectangleText}>Attributes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '97%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  smallRectangle: {
    height: 40,
    width: '48%',
    backgroundColor: '#D8F1EB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  smallRectangleText: {
    fontSize: 13,
  },
});

export default ListAttributeTabs;