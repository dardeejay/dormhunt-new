import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
type CheckBoxProps = {
    checked: boolean,
    onPress: () => void
    color: string
    size: number
    style?: ViewStyle
}
export default function CheckBox({ checked, onPress, color, size, style  }: CheckBoxProps) {

    return (
        <Pressable style={[styles.checkbox, {borderColor: color, width: size, borderRadius: size/3.5}, style]} onPress={onPress} >
            {checked && <AntDesign name="check" size={size-2} color={color} />}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    checkbox: {

        aspectRatio: 1,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

