import { AntDesign, Feather, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { globalColors } from '../globals/global-styles';

export default function SettingsNavigation({ title, iconPackage, iconName, onPress }: { title: string, iconPackage: string, iconName: string, onPress?: any }) {
  
  
    const getIcon = (iconPackage: string, name: any) => {
        switch (iconPackage) {
            case 'feather':
                return <Feather name={name} size={scale(19)} color="black" />
            case 'fa6':
                return <FontAwesome6 name={name} size={scale(19)} color="black" />
            case 'ant':
                return <AntDesign name={name} size={scale(19)} color="black" />
            case 'material':
                return <MaterialIcons name={name} size={scale(19)} color="black" />
            case 'material-community':
                return <MaterialCommunityIcons name={name} size={scale(19)} color="black" />
            default:
                return <Feather name={name} size={scale(19)} color="black" />
        }
    }
    return (
        <TouchableHighlight onPress={onPress} underlayColor={globalColors.lightGrey}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                    {getIcon(iconPackage, iconName)}
                    <Text style={{ fontFamily: 'Montserrat', fontSize: scale(12) }}>{title}</Text>
                </View>
                <Feather name="chevron-right" size={scale(24)} color="black" />
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 17,

        borderBottomWidth: 0.6,
        borderBottomColor: 'black',
        width: '95%'
    }
})