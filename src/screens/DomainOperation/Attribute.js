import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './src/component/Header';      
import Breadcrumb from './src/component/Breadcrumb';   
import ListAttributeTabs from './src/component/ListAttributeTabs'; 
import Circle from './src/component/Circle';             
import Footer from './src/component/Footer';   
import KeyValueBox from './src/component/KeyValueBox';   

const Attribute = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Breadcrumb />
        <ListAttributeTabs />
        <View style={styles.largeRectangle}></View>
        <KeyValueBox /> 
      </ScrollView>
      <Circle />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
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
});

export default Attribute;
