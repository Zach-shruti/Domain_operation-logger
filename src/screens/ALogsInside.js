import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header'; 
import Breadcrumb from './components/Breadcrumb'; 
import ListAttributeLogTabs from './components/ListAttributeLogTabs'; 
import Circle from './components/Circle'; 
import Footer from './components/Footer'; 

const ALogsInside = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Breadcrumb />
        <ListAttributeLogTabs />
        <View style={styles.newLargeRectangle}>
          <Text style={styles.largeRectangleText}>Did</Text>
        </View>
        <View style={styles.anotherLargeRectangle}>
          <Text style={styles.largeRectangleText}>Next</Text>
        </View>
        <View style={styles.rightRectangleContainer}>
          <View style={styles.rightRectangle}>
            <Text style={styles.rightRectangleText}>Save</Text>
          </View>
        </View>

        <KeyValueBox /> 
      </View>
      <View style={styles.circleContainer}>
        <Circle />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
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
    paddingTop: 10, // Shift text a bit towards the top
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
    paddingTop: 10, // Shift text a bit towards the top
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
  circleContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 30,
    paddingBottom: 30,
  },
});

export default ALogsInside;
