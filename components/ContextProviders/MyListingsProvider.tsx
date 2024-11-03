import React, { useState, useEffect, createContext, useContext } from 'react';
import { Listing } from '../../types/Listing';
    
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../FirebaseConfig';

const ListingContext = createContext<IListingContext>({} as IListingContext);

export interface IListingContext {
    myListings: Listing[],
    updateMyListings: (input: Listing[]) => void,
    savedIndex: number,
    updateSavedIndex: (index: number) => void,
    activeListing: Listing | null,
    updateActiveListing: (listing: Listing) => void
}

const MyListingProvider = ({ children }: { children: React.ReactNode }) => {
    const [myListings, setMyListings] = useState<Listing[]>([])
    const [savedIndex, setSavedIndex] = useState<number>(0)
    const [activeListing, setActiveListing] = useState<Listing | null>(null)
    const updateActiveListing = (listing: Listing) => {
        setActiveListing(listing)
    }
    const updateSavedIndex = (index: number) => {
        setSavedIndex(index)
    }
    const updateMyListings = (input: Listing[]) => {
        setMyListings(input)
    }

    useEffect(() => {
        const getListings = async () => {
            const ref = collection(db, 'listings')
            const snapshot = query(ref, where('owner', '==', auth.currentUser?.uid), where('status', '==', 'published'));
            const data = await getDocs(snapshot);

            const listingsRes = data.docs.map(doc => {
                return {
                    ...doc.data(),
                    listingID: doc.id
                } as Listing
            }) as Listing[];
            setMyListings(listingsRes);
        }
        if (auth.currentUser) {
            getListings();
        }
    }, [])
    return (
        <ListingContext.Provider value={{
            myListings,
            updateMyListings,
            savedIndex,
            updateSavedIndex,
            activeListing,
            updateActiveListing
        }}>
            {children}
        </ListingContext.Provider>
    )
}

export { MyListingProvider, ListingContext };