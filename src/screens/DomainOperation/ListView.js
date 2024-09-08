import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './src/component/Header';             // Corrected path
import Breadcrumb from './src/component/Breadcrumb';     // Corrected path
import ListAttributeTabs from './src/component/ListAttributeTabs'; // Corrected path
import Circle from './src/component/Circle';             // Corrected path
import Footer from './src/component/Footer';             // Corrected path
import BoxAboveFooter from './src/component/BoxAboveFooter'; // Added import for the new component

const ListView = () => {
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

export default ListView;