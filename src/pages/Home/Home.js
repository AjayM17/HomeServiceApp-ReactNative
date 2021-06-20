import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import  Card  from '../../components/Card/Card'

const renderCardItems=(item,navigation) =>{
    return( 
    <TouchableOpacity style={{flex:1}} onPress={()=>{navigation.navigate('Persons',{id:item.id})}}>
    <Card name={item.name}/>
    </TouchableOpacity>
)
}

const Home =({navigation}) =>{
console.log(navigation)
    const category =[{
        id:1,
        name:'Plumber'
    },
    {
        id:2,
        name:'Carpentor'
    },
    {
        id:3,
        name:'Electricion'
    },
    {
        id:4,
        name:'A/C Repair'
    },
    {
        id:5,
        name:'Mechanic'
    },
    {
        id:6,
        name:'Other'
    }
]
    
    return(
            <FlatList
            data={category}
            numColumns={3}
            horizontal={false}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => renderCardItems(item,navigation)}
            />
    )
}

export default Home
