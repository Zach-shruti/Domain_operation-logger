import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Text style={styles.text}>Add title</Text>
      </View>
      <View style={styles.boxRectangle}>
        <View style={styles.innerRectangle}></View> {/* Added inner rectangle */}
      </View>
      <View style={styles.bottomRectangle}>
        <Text style={styles.bottomText}>Create</Text> {/* Added text inside bottom rectangle */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the top
    paddingTop: 20, // Adjust this value to control the distance from the top
  },
  rectangle: {
    width: 350,
    height: 50,
    backgroundColor: '#D8F1EB',
    borderRadius: 10,
    justifyContent: 'center', // Center text vertically
    paddingHorizontal: 10, // Add some horizontal padding for spacing
    marginBottom: 20, // Add space between the rectangle and the box rectangle
  },
  text: {
    fontSize: 14,
    fontWeight: 'normal', // Changed to 'normal' as 'regular' is not a valid option
    color: '#000000', // Text color
  },
  boxRectangle: {
    width: 350,
    height: 140,
    backgroundColor: '#D8F1EB',
    borderRadius: 10,
    justifyContent: 'center', // Center the inner rectangle vertically
    alignItems: 'center', // Center the inner rectangle horizontally
  },
  innerRectangle: {
    width: 315,
    height: 50,
    backgroundColor: '#FFFFFF', // White color
    borderRadius: 8,
    marginTop: -60, // Move the inner rectangle up
  },
  bottomRectangle: {
    width: 100,
    height: 40,
    backgroundColor: '#539083', // Color
    borderRadius: 10,
    position: 'absolute', // Position it at the bottom
    bottom: 30, // Distance from the bottom of the screen
    right: 20, // Distance from the right side
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
  },
  bottomText: {
    fontSize: 15,
    color: '#FFFFFF', // Text color
  },
});

export default NewPage;