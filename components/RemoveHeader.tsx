import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

export default function RemoveHeader() {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [])
    return (
        <></>
    )
}

const styles = StyleSheet.create({})