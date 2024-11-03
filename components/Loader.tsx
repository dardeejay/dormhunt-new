import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { globalColors } from '../globals/global-styles'
import { MyContext } from './ContextProviders/MyContextProvider';
const logoImage = require("../assets/images/logos/dormhunt-white.png");
export default function Loader() {
    const { showLoader } = useContext(MyContext)
    return (
        <>
            {showLoader ? <View style={{ flex: 1, backgroundColor: globalColors.primaryBlue, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }} >
                <Image
                    source={logoImage}
                    style={{ width: 100, height: 100, }}
                />
            </View > : <></>
            }</>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})