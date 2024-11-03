import React from 'react'
import { Platform, StyleSheet, Text, TextInput } from 'react-native'
import { scale } from 'react-native-size-matters'
import { globalColors } from '../globals/global-styles'
type LargeInputFieldProps = {
    numberOfLines: number
    value: string
    placeholder: string
    limit?: number
    onChangeText: (text: string) => void
}

export function wordCounter(word: string) {
    if(word == '') return 0;
    return word?.trim().split(' ').length
}
export default function LargeInputField({ numberOfLines, value, placeholder, onChangeText, limit }: LargeInputFieldProps) {
    return (
        <>
            <TextInput
                style={[
                    {
                        width: '100%',
                        marginHorizontal: 20,
                        borderWidth: 0.4,
                        borderColor: globalColors.black2,
                        borderRadius: 10,

                        padding: 10,
                        fontSize: scale(12),
                        minHeight:
                            Platform.OS === "ios" && numberOfLines
                                ? 20 * numberOfLines
                                : null,
                        backgroundColor: globalColors.buttonBase,
                        fontFamily: 'Montserrat',
                    },
                ]}
                placeholder={placeholder}
                multiline={true}
                numberOfLines={Platform.OS === "ios" ? undefined : numberOfLines}
                value={value}
                onChangeText={onChangeText}
                textAlignVertical="top"
                accessibilityViewIsModal
            />
            {limit && <Text style={styles.availableChar}>{`${limit - wordCounter(value)} words available`} </Text>}
        </>
    )
}

const styles = StyleSheet.create({
    availableChar: {
        marginHorizontal: 20,
        color: globalColors.grey3,
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'right',
        alignSelf: 'flex-end',
    }
})