import React from 'react'
import { StyleProp, StyleSheet, Text, TouchableHighlight, ViewStyle } from 'react-native'
import { globalColors, globalStyles } from '../globals/global-styles'

type ButtonProps = {
    title: string,
    onPress: () => void,
    style?: StyleProp<ViewStyle>,
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline'
}
export default function Button({ title, onPress, style, variant = 'primary' }: ButtonProps) {
    const [pressed, setPressed] = React.useState(false)
    const buttonStyle = () => {
        switch (variant) {
            case 'primary':
                return globalStyles.btnPrimary
            case 'secondary':
                return globalStyles.btnPrimaryVibrant
            case 'outline':
                return styles.btnPrimaryOutline
            default:
                return globalStyles.btnPrimary
        }
    }
    const textStyle = () => {
        switch (variant) {
            case 'primary':
                return globalStyles.btnPrimaryText
            case 'secondary':
                return globalStyles.btnPrimaryVibrantText
            case 'outline':
                return styles.btnPrimaryOutlineText
            default:
                return globalStyles.btnPrimaryText
        }
    }
    const underlayColor = () => {
        switch (variant) {
            case 'primary':
                return globalColors.strongBlue
            case 'secondary':
                return globalColors.primaryBlue
            case 'outline':
                return globalColors.primaryBlue
            default:
                return globalColors.strongBlue


        }
    }
    return (
        <TouchableHighlight style={[buttonStyle(), style]} onPress={onPress} onPressIn={() => {
            setPressed(true)
        }} onPressOut={() => {
            setPressed(false)
        }} underlayColor={underlayColor()}>
            <Text style={[textStyle(), (pressed && variant == 'outline') && styles.btnPrimaryOutlineTextAlt]}>{title}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btnPrimaryOutline: {
        backgroundColor: globalColors.white,
        borderColor: globalColors.primaryBlue,
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnPrimaryOutlineText: {
        color: globalColors.primaryBlue,
        fontFamily: 'Montserrat-Medium'
    },
    btnPrimaryOutlineTextAlt: {
        color: globalColors.white,
        fontFamily: 'Montserrat-Medium'
    }
})
