import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    Button,
    SectionList,
    Item
  } from "react-native";

  export default function DeleteSearch({navigation}){

    const University = [
        {
            id: 0,
            name: 'Comsats',
            city: 'Lahore',
            fee: '100000',
            admission: 'open'
        },
        {
            id: 1,
            name: 'PUCIT',
            city: 'Lahore',
            fee: '40000',
            admission: 'close'
        },
        {
            id: 2,
            name: 'NUST',
            city: 'Islamabad',
            fee: '97000',
            admission: 'close'
        },
        {
            id: 3,
            name: 'FAST',
            city: 'Faisalabad',
            fee: '150000',
            admission: 'close'
        },
        
    ]

    // new array =[
    //     {
    //         city: 'Lahore', subUniversity: [
    //             {
    //             id: '0',
    //             name: 'Comsats',
    //             fee: '100000',
    //             admission: 'open'
    //         },
    //         {
    //             id: 1,
    //             name: 'PUCIT',
    //             fee: '40000',
    //             admission: 'close'
    //         }
    //     ]

    //     }
    // ]

    
    function convertArray(arr){
        return [
            {
            city: arr.city, 
            
            UniversityDetails: 
                {
                    id: arr.id,
                    name: arr.name,
                    fee: arr.fee,
                    admission: arr.admission
                }
            
            }
        ]


    }
    const newArray = University.map(convertArray);
    newArray.map((data)=>{
        console.log(data)
    })
    

    return(
        <ScrollView style={styles.container}>
        <View style={{flex: 1}}>
            <View style={{flex: 0.8, backgroundColor: 'orange'}}>
                <SectionList
                    sections={newArray}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />
                    }
                    renderSectionHeader={({ section: { city } }) => (
                        <Text style={styles.header}>{city}</Text>
                    )}
                />
            </View>
            
            <View style={{flex: 0.2, backgroundColor: 'green',margin: 10,padding: 10}}>
            <Button
                title="convert"
                onPress={()=>{
                    //const newArray = University.map(convertArray);
                    console.log(newArray[0])
                    console.log(newArray[1])
                    console.log(newArray[2])
                }}
            ></Button>
            </View>
        </View>
        </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 
    
  });