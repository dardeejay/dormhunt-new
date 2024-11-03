import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { globalColors } from '../globals/global-styles'

export default function ModalHeader() {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',


        }}>
            <TouchableOpacity>
                <Text
                    style={{
                        fontFamily: 'Montserrat-SemiBold',
                        fontSize: 18,
                        color: globalColors.primaryBlue,
                        textAlign: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    Stays
                </Text>
            </TouchableOpacity>
        </View>
    )
}