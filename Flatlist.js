import { useEffect, useState } from 'react';
//import {AsyncStorage} from '@react-native-async-storage/async-storage'
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import CustomHook from './CustomHook';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


//import SaveDataHook from './SaveDataHook';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Search({navigation}) {
  
  const [favoriteColor, setFavoriteColor] = useState('silver')
  
  //const [data,setData] =useState([])
  // const data1 = async()=>{
  //   setData(await AsyncStorage.getItem('Items'));
  // }
  // useEffect(()=>{
  //   data1
  // },[])

  const [data] = CustomHook("https://fakestoreapi.com/products");
  
  return (
   
    <View style={{flex: 1, backgroundColor: 'darkslateblue',}} >
        
           <View style={{flex: 1,backgroundColor:'skyblue',alignItems: 'center'}}>
              <FlatList
                  data={data}
                  horizontal={false}
                  renderItem={({ item }) => (
                    <View 
                      style={{
                        marginTop: 12,
                        marginLeft: 8,
                        marginRight: 3,
                        width: 180,
                        backgroundColor: 'lightgrey'
                      }}
                    >
              
                      <View style={{ flex: 1,backgroundColor: 'white' }}>
                        <TouchableOpacity onPress={()=>{
                          //SelectItem(itemData.item.id)
                        }}
                        
                          
                        >
                          <MaterialIcons name='favorite' size={35} style={{color: favoriteColor,position: 'absolute',right: 10}}></MaterialIcons>
                        </TouchableOpacity>
                      <Image
                            source = {{uri: item.image}}
                            
                            style={{
                              width: 180,
                              height: 150,
                              marginTop: 40,
                              marginLeft: 1,
                              marginRight: 1,
                            }}
                        >
                            
                        </Image>
                        <Text
                            style={{
                              fontSize: 14,
                              color: "black",
                              width: 180, 
                              textAlign: 'center',
                              textAlignVertical: 'center',
                              
                            }}
                        >
                            {item.title}
                        </Text>
                        <Text
                            style={{
                              fontSize: 19,
                              color: "black",
                              width: 180,
                              textAlign: 'center',
                              textAlignVertical: 'center',
                            }}
                        >
                            {item.price}
                        </Text>
                        <Text style={{fontSize: 18,color: 'green',fontWeight:'bold', textAlign: 'center',marginBottom: 4}}>Buy Now</Text>
                        
                      </View>
                    </View>
                )}
              />
            </View> 
          

        
    </View>
    // </ScrollView>
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
