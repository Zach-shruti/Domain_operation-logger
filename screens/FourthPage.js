import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FirstPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/icons/Activity.png')}
          style={styles.icon}
        />
        <View style={styles.flexSpace}></View>
        <Image
          source={require('./assets/icons/search.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.rectangle}>
        <Text style={styles.rectangleText}>breadcrumb</Text>
      </View>
      <View style={styles.rectangleContainer}>
        <View style={styles.smallRectangle}>
          <Text style={styles.smallRectangleText}>List</Text>
        </View>
        <View style={styles.smallRectangle}>
          <Text style={[styles.smallRectangleText, styles.attributesText]}>
            Attributes
          </Text>
        </View>
      </View>
      <View style={styles.largeRectangle}>
        <Text></Text>
      </View>
      <View style={styles.boxRectangle}>
        {/* Inner Rectangle */}
        <View style={styles.innerRectangle}>
          <Text style={styles.innerRectangleText}>key</Text>
        </View>
        {/* Another Rectangle below Inner Rectangle */}
        <View style={styles.anotherRectangle}>
          <Text style={styles.anotherRectangleText}>value</Text>
        </View>
        {/* New Rectangle below Another Rectangle */}
        <View style={styles.newRectangle}>
          <Text style={styles.newRectangleText}>save</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text></Text>
      </View>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Image
            source={require('./assets/icons/add.png')}
            style={styles.circleIcon}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Image
          source={require('./assets/icons/domain.png')}
          style={styles.footerIcon}
        />
        <Image
          source={require('./assets/icons/operation.png')}
          style={styles.footerIcon}
        />
        <Image
          source={require('./assets/icons/tivity.png')}
          style={styles.footerIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  icon: {
    width: 24,
    height: 24,
  },
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
  attributesText: {
    color: '#539083',
  },
  largeRectangle: {
    height: 53,
    width: '95%',
    backgroundColor: '#D8F1EB',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 5,
  },
  boxRectangle: {
    height: 140, // Adjusted height to accommodate the new rectangle
    width: '60%',
    backgroundColor: '#D8F1EB',
    alignSelf: 'center',
    marginVertical: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  innerRectangle: {
    height: 30,
    width: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    position: 'absolute',
    top: 10, // Adjust this value to move it further up or down
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10, // Adjust padding to align text to the left
  },
  innerRectangleText: {
    fontSize: 10,
    color: '#000000', // Set text color to black
  },
  anotherRectangle: {
    height: 30,
    width: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    position: 'absolute',
    top: 50, // Adjust this value to position it below the first rectangle
    justifyContent: 'center',
    alignItems: 'flex-start', // Align text to the left
    paddingLeft: 10, // Adjust padding to align text to the left
  },
  anotherRectangleText: {
    fontSize: 10,
    color: '#000000', // Set text color to black
  }, 
  newRectangle: {
    height: 26,
    width: 75,
    backgroundColor: '#539083',
    borderRadius: 15,
    position: 'absolute',
    top: 100, // Positioning it below the anotherRectangle
    justifyContent: 'center',
    alignItems: 'center',
  },
  newRectangleText: {
    fontSize: 10,
    color: '#ffffff', // Set text color to white
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end', // Align the circle towards the right
    marginBottom: 90, // Add margin to avoid overlapping with the footer
    paddingRight: 30, // Optional: Add padding to move it away from the right edge
  },
  circle: {
    height: 70,
    width: 70,
    backgroundColor: '#D8F1EB',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIcon: {
    height: 24,
    width: 24,
  },
  footer: {
    height: 60,
    width: '100%',
    backgroundColor: '#539083',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0, // This will fix the footer at the bottom of the screen
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
});

export default FirstPage;
