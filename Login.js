//import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';
export default function Login({navigation}) {
  const [Email,setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isLogin,setIsLogin] = useState(false);
  
  return (
    <ScrollView style={{flex: 1}}>
    <View style={{flex: 1,justifyContent: 'center'}}>
      <View style={{flex: 0.4,alignItems: 'center',justifyContent: 'flex-end',marginTop: 100}}>
        <Ionicons name='md-person-circle' size={100} color='darkslateblue'></Ionicons>
        <Text style={{fontSize: 24,color: 'darkslateblue',marginBottom: 10}}>Welcome back!</Text>
      </View>
      <View style={{flex: 0.6,alignItems: 'center'}}>
        <TextInput placeholder='Email' onChangeText={(value)=>setEmail(value)} style={styles.TextInput1}></TextInput>
        <TextInput placeholder='Password' onChangeText={(value)=>setPassword(value)} style={styles.TextInput2}></TextInput>
        <TouchableOpacity>
          <Text style={{fontSize: 20, marginLeft: 160,marginTop: 5}}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{
            {}
            
          }}
          style={{backgroundColor: 'darkslateblue',borderRadius: 10,width: '90%',height: 60,marginTop: 40}}
        >
          <Text style={{fontSize: 32,textAlign: 'center',marginTop: 7,color: 'white',fontWeight: '700'}}>Login</Text>
        </TouchableOpacity>      
        <Text style={{fontSize: 22,marginLeft: -42,marginTop: 15}}>Don't have an account? </Text>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('Signup')}}
        style={{position: 'absolute',bottom: 0,right: 22}}
        >
            <Text style={{fontSize: 22,color: 'darkslateblue'}}>Signup</Text>  
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput1: {
    width: '90%',
    height: 60,
    backgroundColor: 'white',
    color: 'black', 
    fontSize: 24, 
    marginTop: 40,
    borderRadius: 10,
    padding:10
  },
  TextInput2: {
    width: '90%',
    height: 60,
    backgroundColor: 'white',
    color: 'black', 
    fontSize: 24, 
    marginTop: 20,
    borderRadius: 10,
    padding:10
  }
});
