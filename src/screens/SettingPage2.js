import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './component/Header'; 
import Breadcrumb from './component/Breadcrumb'; 
import Footer from './component/Footer'; 
import KeyValueBox from '/component/KeyValueBox'; 

const SettingPage2 = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Breadcrumb />
        <View style={styles.largeRectangle}></View>
        <KeyValueBox />
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
});

export default SettingPage2;
