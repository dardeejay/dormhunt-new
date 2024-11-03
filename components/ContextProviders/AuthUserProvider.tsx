import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';
import { ICustomerData } from '../../screens/SignIn/Owner/OwnerNotifications/ICustomerData.types';
import { auth, db } from '../../FirebaseConfig';

export const AuthUserContext = createContext<IAuthUserContext>({} as IAuthUserContext);
interface IAuthUserContext {
    currentUser: ICustomerData | undefined;

}
export default function AuthUserProvider({ children }: { children: React.ReactNode }) {



    const [currentUser, setCurrentUser] = useState<ICustomerData | undefined>();
    useEffect(() => {
        const fetchCurrentUserDetails = async () => {
            console.log("this runs")
            const userData = await AsyncStorage.getItem('userDetails');
            if (userData) {
                setCurrentUser(JSON.parse(userData) as ICustomerData);
                return;
            }
            const userRef = collection(db, 'users');
            if (auth.currentUser) {
                const q = query(userRef, where('email', '==', auth.currentUser.email));
                const userDoc = await getDocs(q);
                console.log(userDoc.docs[0].data())
                setCurrentUser(userDoc.docs[0].data() as ICustomerData);
                await AsyncStorage.setItem('userDetails', JSON.stringify(userDoc.docs[0].data()));
            }
            SplashScreen.hideAsync();

        };
        fetchCurrentUserDetails();
    }, [auth.currentUser]);

    return (
        <AuthUserContext.Provider value={{
            currentUser,

        }}>
            {children}
        </AuthUserContext.Provider>
    )
}
