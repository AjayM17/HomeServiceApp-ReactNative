import React, { useEffect, useState } from 'react';
import { View } from 'react-native'

const data = [{
    cat_id: 1,
    cat_name: 'A',
    name: 'Aa',
    id: '11'
},
{
    cat_id: 1,
    cat_name: 'A',
    name: 'Aa',
    id: '11'
}]

const Person = ({ route }) => {
    const [fData, setfDtata] = useState([]);
    useEffect(() => {
        console.log('param id' + route.params.id)
        const filterData = data.filter(item => item.cat_id == route.params.id)
        console.log(filterData)
        setfDtata(filterData)
        console.log(filterData)
        return () => {

        };
    }, [route.params.id]);
    return (
        <View />
    )
}

export default Person
