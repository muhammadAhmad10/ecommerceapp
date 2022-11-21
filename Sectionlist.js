import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image, FlatList, SectionList } from 'react-native';

export default function Sectionlist({navigation}) {
       
    const Web= [
     {mainTitle: 'Discover' , 
      data: [ {
            title: 'Programming Fundamentals',
            description: 'Introduction to Programming'
        },
        {
            title: 'Data Structures',
            description: 'Data Structures'
        },
        {
            title: 'Database Systems',
            description: 'Database Systems'
        },
        {
            title: 'Machine Learning',
            description: 'Machine Learning'
        },
        {
            title: 'Cloud Computing',
            description: 'Cloud Computing'
        },
        {
            title: 'Information Security',
            description: 'Cyber Security'
        },
        {
            title: 'App Development',
            description: 'Mobile Development'
        },
        {
            title: 'Web Development',
            description: 'Web Development'
        },
        {
            title: 'Data Science',
            description: 'Data Science'
        }]}
    ]

    

  return (

    <View style={{flex: 1,justifyContent: "center",alignItems:'center',backgroundColor:'darkslateblue'}}  >
             
        
        <View style={{flex: 0.85,borderTopRightRadius: 20,borderTopLeftRadius: 20, backgroundColor: 'white', width: '100%',
         height: '100%'}}>

<SectionList
      sections={Web}
      renderItem={({item}) => 
      <TouchableOpacity 
      onPress={()=>{
        if(item.title==="Web Development"){
          navigation.navigate('Web')
        }
      }}
              style={{
                flex: 1,
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 30,
                marginRight: 30,
                height: 160,
              }}
              
            >
              <View style={{backgroundColor:'yellow',color: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               

                <View style={{flex: 0.3,backgroundColor: 'slateblue', width: '100%',justifyContent: 'center',alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 18,
                    color:'white', 
                  }}
                >
                  {item.title}
                </Text>
                </View>
              </View>
            </TouchableOpacity>}

renderSectionHeader={
  ({ section: { mainTitle } }) => (
  <View style={{marginBottom: 10,borderRadius: 10,flex: 1,justifyContent: 'center',
  alignItems: 'center',backgroundColor:'slateblue', height:50,
   marginLeft: 20, marginRight: 20, marginTop: 20}}>
  <Text style={{color:'white', fontSize:26, fontWeight: 'bold'}}>{mainTitle}</Text>
  </View>
)}
    />

        </View>
       
        
      
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
