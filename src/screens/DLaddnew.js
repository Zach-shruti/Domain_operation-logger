import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DLaddnewScreens = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <View style={styles.rectangle}>
          <Text style={styles.rectangleText}>Add Title</Text> {/* Text in the upper rectangle */}
        </View>
        <View style={styles.smallRectangle}>
          <Text style={styles.smallRectangleText}>Save</Text> {/* Text in the lower rectangle */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Aligns the footer to the bottom of the screen
  },
  footer: {
    height: 124,                // Footer height
    width: '100%',              // Set width to cover the entire screen
    backgroundColor: '#D8F1EB', // Footer color
    alignItems: 'center',       // Centers the main rectangle horizontally
    justifyContent: 'center',   // Centers the main rectangle vertically
    flexDirection: 'row',       // Allows the placement of items horizontally
  },
  rectangle: {
    height: 60,                 // Rectangle height
    width: 330,                 // Rectangle width
    backgroundColor: '#FFFFFF', // Rectangle color (white)
    borderRadius: 10,           // Rounded corners
    marginBottom: 40,           // Move the rectangle slightly up
    justifyContent: 'center',   // Centers content vertically
    paddingLeft: 10,            // Adds padding on the left for text alignment
  },
  rectangleText: {
    fontSize: 16,               // Text size
    color: '#000000',           // Text color (black)
    textAlign: 'left',          // Aligns text to the left
  },
  smallRectangle: {
    height: 30,                 // Small rectangle height
    width: 60,                  // Small rectangle width
    backgroundColor: '#FFFFFF', // Small rectangle color (white)
    borderRadius: 10,           // Rounded corners
    position: 'absolute',       // Position absolute to place it on the right
    right: 20,                  // Distance from the right edge of the footer
    bottom: 10,                 // Lower the small rectangle more than the large one
    justifyContent: 'center',   // Centers content vertically
    alignItems: 'center',       // Centers content horizontally
  },
  smallRectangleText: {
    fontSize: 14,               // Text size
    color: '#000000',           // Text color (black)
  },
});

export default DLaddnewScreens;