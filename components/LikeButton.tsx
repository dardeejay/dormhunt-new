import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import { Ionicons } from 'undefined';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import { globalColors } from '../globals/global-styles';
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableHighlight)
export default function LikeButton({ listingId , size}: { listingId: string, size?: number }) {
    const auth = FIREBASE_AUTH;
    const currentUser = auth.currentUser;
    const db = FIREBASE_DB;
    const handleLike = async () => {
        setIcon(!icon)
        if (currentUser) {
            const newCollection = doc(db, 'users', currentUser.uid, 'userLikes', listingId,)

            if (!icon) {
                await setDoc(newCollection, {
                    likes: listingId
                })
            }
            else {
                console.log('Deleting')
                await deleteDoc(newCollection)
            }
        }

    }
    useEffect(() => {
        const checkLike = async () => {
            if (currentUser) {

                const userLikes = doc(db, 'users', currentUser.uid, 'userLikes', listingId)
                const userDoc = await getDoc(userLikes)
                if (userDoc.exists()) {
                    setIcon(true)
                }
            }
        }
        checkLike()
    },[])
    const animatedSize = useSharedValue(1);
    const [icon, setIcon] = useState(false)
    return <AnimatedTouchable onPress={handleLike}
        underlayColor={globalColors.white}
        style={{
            transform: [{ scale: animatedSize }]
        }}
        onPressIn={() => {
            animatedSize.value = withTiming(0.6, { duration: 100 })
        }}
        onPressOut={() => {
            animatedSize.value = withTiming(1, { duration: 100 })
        }}

    >
        <Ionicons name={icon ? "heart" : "heart-outline"} size={size ??24} color={globalColors.primaryBlue} />
    </AnimatedTouchable>
}

const styles = StyleSheet.create({})