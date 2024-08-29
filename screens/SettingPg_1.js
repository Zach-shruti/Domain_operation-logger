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

      {/* New rectangle below the existing rectangle */}
      <View style={styles.newRectangle}>
        <Text style={styles.newRectangleText}>Activity_name</Text>
      </View>

      <View style={styles.content}>
        <Text></Text>
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
  newRectangle: {
    height: 50,
    width: 350,
    backgroundColor: '#D8F1EB',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 2, // Add padding to shift text to the left
  },
  newRectangleText: {
    fontSize: 14,
    color: '#000000', // Black color
    textAlign: 'left', // Align text to the left
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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