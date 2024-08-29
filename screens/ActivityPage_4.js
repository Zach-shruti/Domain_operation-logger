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

      {/* New rectangle containers with three rectangles and text */}
      <View style={styles.newRectangleContainer}>
        <View style={styles.newRectangle}>
          <Text style={styles.newRectangleText}>Lists</Text>
        </View>
        <View style={styles.newRectangle}>
          <Text style={styles.newRectangleText}>Attributes</Text>
        </View>
        <View style={styles.newRectangle}>
          <Text style={styles.newRectangleText}>Logs</Text>
        </View>
      </View>

      {/* New rectangle below the rectangle container */}
      <View style={styles.newRectangleBelow}></View>

      {/* Box rectangle below the newRectangleBelow */}
      <View style={styles.boxRectangle}>
        {/* Rectangle inside the box rectangle with text */}
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
    color: '#000000', // Black color for text in inner rectangles
  },
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
    color: '#000000', // Black color
  },
  newRectangleBelow: {
    height: 53,
    width: 350,
    backgroundColor: '#D8F1EB',
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  // Box rectangle style
  boxRectangle: {
    height: 140, // Height of the box rectangle
    width: 240, // Width of the box rectangle
    backgroundColor: '#D8F1EB',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Inner rectangle inside the box rectangle
  innerRectangle: {
    height: 30,
    width: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    position: 'absolute',
    top: 15, // Position for the first rectangle
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10, // Align text to the left
  },

  // Bottom rectangle inside the box rectangle
  bottomRectangle: {
    height: 26, // Height of the bottom rectangle
    width: 75,  // Width of the bottom rectangle
    backgroundColor: '#539083', // Color of the bottom rectangle
    borderRadius: 10, // Border radius
    position: 'absolute',
    bottom: 15, // Position it at the bottom
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomRectangleText: {
    fontSize: 12,
    color: '#FFFFFF', // White color for text in the bottom rectangle
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
});

export default FirstPage;