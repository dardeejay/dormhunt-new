import React, { createContext, useState, useEffect } from 'react';
import * as Location from 'expo-location'

interface LocationContextType {
    location: Location.LocationObject | null;
    errorMsg: string | null;
    updateLocation: (locationData: Location.LocationObject) => void;
}
const initialContext: LocationContextType = {
    location: null,
    errorMsg: null,
    updateLocation: () => { }
};
export const LocationContext = createContext<LocationContextType>(initialContext);

export const LocationContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const updateLocation = async (locationData: Location.LocationObject) => {
        setLocation(locationData);
    }
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            try {
                let currentLocation = await Location.getCurrentPositionAsync({});
                setLocation(currentLocation);
            } catch (error) {
                setErrorMsg('Error getting location');
            }
        })();
    }, []);
    return (
        <LocationContext.Provider value={{
            location,
            errorMsg,
            updateLocation
        }}>
            {children}
        </LocationContext.Provider>
    )
}
