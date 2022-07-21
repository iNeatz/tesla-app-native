import React from "react"
import { View, Text, FlatList, Dimensions } from 'react-native'
import cars from "./cars"
import styles from './styles'
import CarItem from '../Caritem/index'

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                snapToAlignment={'start'}
                showsVerticalScrollIndicator={false}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height + 33}
            />
        </View>
    )
}

export default CarsList