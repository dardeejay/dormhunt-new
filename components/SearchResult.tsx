import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../globals/global-styles';
interface SearchResultProps {
    placeDetails: google.maps.places.AutocompletePrediction,
    props?: PressableProps,
    onPress?: () => void
}
export default function SearchResult({ placeDetails, props, onPress }: SearchResultProps) {
    return (
        <Pressable style={styles.mainContainer} onPress={onPress}>
            <View style={styles.TextContainer }>
                <Feather name="map-pin" size={33} color={globalColors.strongBlue} />
                <Text style={{fontFamily: 'Montserrat-SemiBold', flex: 1, flexWrap: 'wrap', color: globalColors.strongBlue, fontSize: 16}}>{placeDetails.description}</Text>

            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: globalColors.lightBlue,
    },
    TextContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    
        gap: 15,
    }
})