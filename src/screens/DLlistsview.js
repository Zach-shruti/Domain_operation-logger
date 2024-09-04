import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './component/Header';             // Corrected path
import Breadcrumb from './component/Breadcrumb';     // Corrected path
import ListAttributeTabs from './component/ListAttributeTabs'; // Corrected path
import Circle from './component/Circle';             // Corrected path
import Footer from './component/Footer';             // Corrected path
import BoxAboveFooter from './component/BoxAboveFooter'; // Added import for the new component

const DLlistsview = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Breadcrumb />
        <ListAttributeTabs />
      </ScrollView>
      <BoxAboveFooter /> 
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
    paddingBottom: 150,  // Increased padding to ensure space for the new box above the footer
  },
});

export default DLlistsview;