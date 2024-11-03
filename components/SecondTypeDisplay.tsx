import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../globals/global-styles';
import { SecondType } from '../types/Listing';

export default function SecondTypeDisplay({ type }: { type: SecondType }) {

    return (
        <View style={styles.container}>
            {type === "entire"
                &&
                <View style={styles.container}>
                    <Ionicons name="home-outline" size={24} color={globalColors.grey3} />
                    <Text style={styles.textStyle}> Entire Place</Text>
                </View>}
            {type === "single" && <View style={styles.container}>
                <MaterialCommunityIcons name="bed-outline" size={24} color={globalColors.grey3} />
                <Text style={styles.textStyle}> Single Room</Text>
            </View>}
            {type === "shared" && <View style={styles.container}>
                <MaterialCommunityIcons name="bunk-bed-outline" size={24} color={globalColors.grey3} />

                <Text style={styles.textStyle}> Shared Room</Text>
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,

    },
    textStyle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: globalColors.grey3
    }
})