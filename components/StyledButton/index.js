import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const StyledButton = ({ type, content, onPress }) => {
    const backgroundColor = type == 'primary' ? '#171a20cc' : '#ffffffa6'
    const textColor = type == 'secondary' ? '#171a20' : 'white'

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor }]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, { color: textColor }]}>
                    {content}
                </Text>
            </Pressable>
        </View>
    )
}

export default StyledButton
