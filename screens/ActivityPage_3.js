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

      <View style={styles.content}>
        <Text></Text>
      </View>
      
      <View style={styles.topRectangle}>
        <View style={styles.innerRectangle}>
          <Text style={styles.innerRectangleText}>Activity_name</Text>
        </View> {/* Positioned towards top-left */}
        <View style={styles.innerRectangleBelow}>
          <Text style={styles.innerRectangleBelowText}>Date</Text>
        </View> {/* Positioned below innerRectangle */}
        <View style={styles.rightCircle}></View> {/* Positioned towards the right */}
      </View>

      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Image
            source={require('./assets/icons/add.png')}
            style={styles.circleIcon}
          />
        </View>
      </View>

      <View style={styles.footerContainer}>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 30,
    paddingBottom: 10, // Increased padding to move circle further down
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
  topRectangle: {
    height: 75,
    width: 350,
    backgroundColor: '#D8F1EB',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10,
    position: 'absolute', // Position it above the footer
    bottom: 70, // Adjust this value to position it above the footer
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRectangle: {
    height: 22,
    width: 138,
    backgroundColor: '#FFFFFF', // White color
    borderRadius: 5,
    position: 'absolute', // Position it relative to the parent
    top: 10, // Adjust this value to move it down from the top
    left: 10, // Adjust this value to move it from the left
    justifyContent: 'center',
    alignItems: 'flex-start', // Align text to the left inside the rectangle
  },
  innerRectangleText: {
    fontSize: 12,
    color: '#000000', // Black color
    marginLeft: 10, // Slightly move text towards the left side
  },
  innerRectangleBelow: {
    height: 22,
    width: 138,
    backgroundColor: '#FFFFFF', // White color
    borderRadius: 5,
    position: 'absolute', // Position it relative to the parent
    top: 42, // Adjust this value to position it below the first rectangle
    left: 10, // Keep it aligned to the left
    justifyContent: 'center',
    alignItems: 'flex-start', // Align text to the left inside the rectangle
  },
  innerRectangleBelowText: {
    fontSize: 12,
    color: '#000000', // Black color
    marginLeft: 10, // Slightly move text towards the left side
  },
  rightCircle: {
    height: 27,
    width: 27,
    backgroundColor: '#FFFFFF', // White color
    borderRadius: 13.5, // Half of the height/width to make it circular
    position: 'absolute', // Position it relative to the parent
    right: 50, // Position it towards the right side
    top: 22, // Position it from the top
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Ensure the footer is at the bottom
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