import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Breadcrumb = () => {
  return (
    <View style={styles.rectangle}>
      <Text style={styles.rectangleText}>breadcrumb</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    height: 30,
    width: '97%',
    backgroundColor: '#D8F1EB',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 5,
    paddingLeft: 15,
  },
  rectangleText: {
    fontSize: 12,
  },
});

export default Breadcrumb;