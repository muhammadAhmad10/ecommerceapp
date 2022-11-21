import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { Component, useEffect, useState } from 'react';

export default function Home({navigation}) {

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
     
      <Button
          title="Signup"
          onPress={() =>
            navigation.navigate('Signup')
          }
        />

      <Button
          title="Login"
          onPress={()=>{
            navigation.navigate('Login')
          }}
        />
        <Button
          title="Flatlist"
          onPress={()=>{
            navigation.navigate('Flatlist')
          }}
        />
        <Button
          title="Sectionlist"
          onPress={()=>{
            navigation.navigate('Sectionlist')
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
