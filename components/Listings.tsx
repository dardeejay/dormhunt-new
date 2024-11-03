import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { FIREBASE_AUTH, FIREBASE_DB, FIREBASE_STORAGE } from '../FirebaseConfig'
import { globalColors } from '../globals/global-styles'
import { Listing } from '../types/Listing'
import LikeButton from './LikeButton'
import {REACT_APP_PROJECT_ID} from '@env'
const placeholderWithBranding = require('../assets/images/imageplaceholder-with-branding.png');
export const checkType = (type: string) => {
    if (type === 'apartment') {
        return <MaterialCommunityIcons name="home-group" size={22} color={globalColors.black} style={{ opacity: 0.7 }} />
    }
    if (type === 'single') {
        return <MaterialCommunityIcons name="bed-single-outline" size={22} color={globalColors.black} style={{ opacity: 0.7 }} />
    }
    if (type === 'double') {
        return <MaterialCommunityIcons name="bunk-bed-outline" size={22} color={globalColors.black} style={{ opacity: 0.7 }} />
    }
    if (type === 'deluxe') {
        return <MaterialCommunityIcons name="home-city" size={22} color={globalColors.black} style={{ opacity: 0.7 }} />
    }
}

export default function Listings({ listing }: { listing: Listing }) {
    const [icon, setIcon] = useState(false)
    const storage = FIREBASE_STORAGE
    const auth = FIREBASE_AUTH;
    const currentUser = auth.currentUser;
    const db = FIREBASE_DB;
    const navigation = useNavigation<any>()
    const cover = `https://firebasestorage.googleapis.com/v0/b/${REACT_APP_PROJECT_ID}.appspot.com/o/${encodeURIComponent(listing.cover)}?alt=media`


    const navigateToDetails = () => {
        navigation.navigate({
            name: 'PropertyDetails',
            params: {
                propertyDetails: listing
            }

        })
    }
    return (
        <Pressable onPress={navigateToDetails}>
            <View style={styles.container} key={listing.listingID}>
                {cover &&
                    <Image
                        source={listing.cover ?  {uri: cover} : placeholderWithBranding}
                        style={styles.listingImage}
                        onError={(e)=>{
                            console.log(e.nativeEvent.error, listing.title)
                            console.log(cover)
                        }}
                    />}
                <View style={styles.bottomSection}>
                    <View style={{
                        width: '80%'
                    }}>
                        <Text style={styles.priceStyle}>{'\u20B1' + listing.price.toLocaleString() + ' / Month'}</Text>
                        <Text style={styles.titleStyle}>{listing.title}</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5
                        }}>
                            {
                                checkType(listing.type)
                            }
                            <Text style={styles.typeStyle}>{listing.type}</Text>
                        </View>
                    </View>
                    <View>
                        <LikeButton listingId={listing.listingID} />
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        backgroundColor: globalColors.white,
        borderRadius: 10,
        shadowColor: globalColors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginVertical: 10,
    },
    bottomSection: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    textContainer: {

    },
    priceStyle: {
        fontSize: 15,
        fontFamily: 'Montserrat',
        color: globalColors.primaryBlue
    },
    titleStyle: {
        fontSize: 18,
        fontFamily: 'Montserrat',
        color: globalColors.black
    },
    listingImage: {
        width: '100%',
        height: 200,
    },
    typeStyle: {
        fontSize: 14,
        fontFamily: 'Montserrat',
        color: globalColors.black,
        opacity: 0.7,
        textTransform: 'capitalize'
    }

})

function newFunction(handleLike: () => Promise<void>) {

}
