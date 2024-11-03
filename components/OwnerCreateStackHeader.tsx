import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../globals/global-styles'

export default function OwnerCreateStackHeader({headerTitle, headerSubtitle}: {headerTitle: string, headerSubtitle: string}) {
    return (
        <View style={{ marginTop: 10, padding: 20, }}>
            <Text style={globalStyles.pageHeading}>
                {headerTitle}
            </Text>
            <Text style={globalStyles.pageSubheading}>{headerSubtitle}</Text>
        </View>
    )
}
