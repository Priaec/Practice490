import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
 
const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
           Welcome
            {'\n\n'}
            To Fitness Application track your health well being
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Thank you for trusting us{'\n'}React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
         Fitness App 2022
        </Text>
      </View>
    </SafeAreaView>
  );
};
 
export default HomeScreen;