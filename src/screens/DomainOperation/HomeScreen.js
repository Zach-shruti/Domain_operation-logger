import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Header from './src/component/Header';
import Breadcrumb from './src/component/Breadcrumb';
import ListAttributeLogTabs from './src/component/ListAttributeLogTabs';
import KeyValueBox from './src/component/KeyValueBox'; 
import Circle from './src/component/Circle';
import Footer from './src/component/Footer';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Breadcrumb />
        <ListAttributeLogTabs />
        <KeyValueBox /> 
      </View>
      <View style={styles.circleContainer}>
        <Circle />
      </View>
      <Button
        title="Go to Add New"
        onPress={() => navigation.navigate('AddNew')}
      />
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
  circleContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 30,
    paddingBottom: 30,
  },
});

export default HomeScreen;




