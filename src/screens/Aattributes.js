import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './component/Header'; 
import Breadcrumb from './component/Breadcrumb'; 
import ListAttributeLogTabs from './component/ListAttributeLogTabs'; 
import KeyValueBox from './component/KeyValueBox'; 
import Circle from './component/Circle'; 
import Footer from './component/Footer'; 

const Aattributes = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Breadcrumb />
        <ListAttributeLogTabs />
        <View style={styles.largeRectangle}></View>
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
  largeRectangle: {
    height: 53,
    width: '95%',
    backgroundColor: '#D8F1EB',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 5,
  },
  circleContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 30,
    paddingBottom: 30,
  },
});

export default Aattributes;