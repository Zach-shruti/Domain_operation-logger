import React from 'react';
import { View, StyleSheet, ScrollView, Text, Button } from 'react-native';
import Header from '../component/Header';             // Corrected path
import Breadcrumb from '../component/Breadcrumb';     // Corrected path
import ListAttributeTabs from '../component/ListAttributeTabs'; // Corrected path
import Circle from '../component/Circle';             // Corrected path
import Footer from '../component/Footer';             // Corrected path

const DLHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Breadcrumb />
        <ListAttributeTabs />

        {/* Navigation button to go to Add New Screen */}
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Add New"
            onPress={() => navigation.navigate('DLAddNew')}
          />
        </View>
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
    paddingBottom: 80,  // Ensure there's space for the footer and floating action button
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default DLHomeScreen;



