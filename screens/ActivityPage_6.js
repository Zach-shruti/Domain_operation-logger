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

      {/* New rectangles with specified dimensions and text */}
      <View style={styles.newLargeRectangle}>
        <Text style={styles.largeRectangleText}>Did</Text>
      </View>
      <View style={styles.anotherLargeRectangle}>
        <Text style={styles.largeRectangleText}>Next</Text>
      </View>

      {/* New rectangle below anotherLargeRectangle towards the right with text */}
      <View style={styles.rightRectangleContainer}>
        <View style={styles.rightRectangle}>
          <Text style={styles.rightRectangleText}>Save</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text></Text>
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
  newLargeRectangle: {
    height: 130,
    width: 350,
    backgroundColor: '#D8F1EB',
    borderRadius: 0,
    alignSelf: 'center',
    marginVertical: 20,
    justifyContent: 'center', // Center text vertically
    paddingLeft: 10, // Add some padding from the left
    paddingTop: 10, // Shift text a bit towards the top (adjusted from 20 to 30)
  },
  anotherLargeRectangle: {
    height: 130,
    width: 350,
    backgroundColor: '#D8F1EB',
    borderRadius: 0,
    alignSelf: 'center',
    marginVertical: 10,
    justifyContent: 'center', // Center text vertically
    paddingLeft: 10, // Add some padding from the left
    paddingTop: 10, // Shift text a bit towards the top (adjusted from 20 to 30)
  },
  largeRectangleText: {
    fontSize: 14,
    color: '#000000', // Black color
  },
  rightRectangleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  rightRectangle: {
    height: 30,
    width: 70, // Adjust width as needed
    backgroundColor: '#D8F1EB',
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
  },
  rightRectangleText: {
    fontSize: 12,
    color: '#000000', // Black color
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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