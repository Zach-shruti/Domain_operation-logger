import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/component/Header';
import Breadcrumb from './src/component/Breadcrumb';
import ListAttributeLogTabs from './src/component/ListAttributeLogTabs';
import Circle from './src/component/Circle';
import Footer from './src/component/Footer';
import BoxAboveFooter from './src/component/BoxAboveFooter'; 

const ListView = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Breadcrumb />
        <ListAttributeLogTabs />
        <BoxAboveFooter /> 
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
  circleContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 30,
    paddingBottom: 30,
  },
});

export default ListView;