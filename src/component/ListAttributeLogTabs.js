import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListAttributeLogTabs = () => {
  return (
    <View style={styles.newRectangleContainer}>
      {['Lists', 'Attributes', 'Logs'].map((item) => (
        <View key={item} style={styles.newRectangle}>
          <Text style={styles.newRectangleText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  newRectangleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '97%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  newRectangle: {
    height: 24,
    width: 115,
    backgroundColor: '#D8F1EB',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newRectangleText: {
    fontSize: 12,
    color: '#000000',
  },
});

export default ListAttributeLogTabs;