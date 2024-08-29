// FirstPage.js

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
      <View style={styles.rectangleContainer}>
        <View style={styles.smallRectangle}>
          <Text style={styles.smallRectangleText}>List</Text>
        </View>
        <View style={styles.smallRectangle}>
          <Text style={styles.smallRectangleText}>Attributes</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text></Text>
      </View>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Image
            source={require('./assets/icons/add.png')}
            style={styles.circleIcon}
          />
        </View>
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
  rectangleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '97%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  smallRectangle: {
    height: 40,
    width: '48%',
    backgroundColor: '#D8F1EB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  smallRectangleText: {
    fontSize: 13,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 30,
    paddingBottom: 30,
  },
  circle: {
    height: 70,
    width: 70,
    backgroundColor: '#D8F1EB',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIcon: {
    height: 24,
    width: 24,
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
