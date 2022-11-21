//import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
//import { isLogin,setIsLogin } from "./App";


  export default function Signup({navigation}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [Confirmpassword, setConfirmPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [Fullname, setFullName] = useState("");
    const [Phonenumber, setpPhoneNumber] = useState("");
    const [isLogin,setIsLogin] = useState(false);


  return (  
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{flex: 1}}>
        <View style={{flex: 0.1,alignItems: 'center'}}>
          <Text style={{fontSize: 22,color: 'darkslateblue',textAlign: 'center',marginBottom: 5,marginTop: 10}}>Create your account here!</Text>
        </View>
        <View style={{flex: 0.9}}>
          <Text style={styles.HeadingText}>Username</Text>
          <TextInput placeholder="AhmadRashid" 
            onChangeText={(value)=>setUsername(value)}
            style={styles.TextInput}>
          </TextInput>
          <Text style={styles.HeadingText}>Password</Text>
          <TextInput placeholder="******"
            onChangeText={(value)=>setPassword(value)}
            style={styles.TextInput}>
          </TextInput>
          <Text style={styles.HeadingText}>Confirm Password</Text>
          <TextInput placeholder="******" 
            onChangeText={(value)=>setConfirmPassword(value)}
            style={styles.TextInput}>
          </TextInput>
          <Text style={styles.HeadingText}>Email</Text>
          <TextInput placeholder="ahmad@gmail.com"
            onChangeText={(value)=>setEmail(value)}
            style={styles.TextInput}>
          </TextInput>
          <Text style={styles.HeadingText}>Full Name</Text>
          <TextInput placeholder="Muhammad Ahmad"
            onChangeText={(value)=>setFullName(value)}
            style={styles.TextInput}>
          </TextInput>
          <Text style={styles.HeadingText}>Phone Number</Text>
          <TextInput placeholder="+923018067153"
            onChangeText={(value)=>setpPhoneNumber(value)}
            style={styles.TextInput}>
          </TextInput>
    
          <TouchableOpacity style={styles.SaveBtn}
          onPress={()=>{
            
          }}
          >
            <Text style={{fontSize: 28,color: 'white',fontWeight: '700'}}>Register Now</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 20,marginLeft: 107}}>Already registered?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text style={{color: 'darkslateblue',fontSize: 22,position: "absolute",bottom: 0,right: 25}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  TextInput: {
    height: 50,
    width: '90%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 18,
    fontSize: 18
  },
 
  SaveBtn: {
    width: '90%',
    borderRadius: 10,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: 18,
    marginBottom: 10,
    backgroundColor: "darkslateblue",
  },
  
  HeadingText:{
    color:"black",
    fontWeight:"700",
    fontSize:20,
    marginBottom: 3,
    marginLeft: 25,
    marginTop: 3
  },

});
