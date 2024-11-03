import React, { useEffect, useState } from "react";
const MyContext = React.createContext<IMyContext>({} as IMyContext);
import { User } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DocumentData } from "firebase/firestore";
import * as ImagePicker from 'expo-image-picker';
export interface IMyContext {
  firebaseUser: User | null;
  updateFirebaseUser: (input: User | null) => void;
  userDetails: any;
  updateUserDetails: (input: any) => void;
  userMode: string | null;
  updateUserMode: (input: string) => void;
  currentDraftId: string | null;
  updateCurrentDraftId: (input: string) => void;
  draftDetails: DocumentData | null;
  updateCurrentDraftDetails: (input: DocumentData | null) => void;
  draftImages: ImagePicker.ImagePickerAsset[];
  updateDraftImages: (input: ImagePicker.ImagePickerAsset[]) => void;
  resetDraftImages: (input: ImagePicker.ImagePickerAsset[]) => void;
  publishedListings: any;
  updatePublishedListings: (input: any) => void;
  showLoader: boolean;
  setShowLoader : React.Dispatch<React.SetStateAction<boolean>>

}
export type SavedDraftImages = {
  refPath: string;
  uri: string;
}
const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [userDetails, setUserDetails] = useState();
  const [userMode, setUserMode] = useState<string | null>('');
  const [currentDraftId, setCurrentDraftId] = useState<string | null>('');
  const [draftDetails, setDraftDetails] = useState<DocumentData | null>(null);
  const [draftImages, setDraftImages] = useState<ImagePicker.ImagePickerAsset[]>([] as unknown as ImagePicker.ImagePickerAsset[]);
  const [publishedListings, setPublishedListings] = useState();
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const updatePublishedListings = (input: any) => {
    setPublishedListings(input);
  }
  const updateFirebaseUser = (input: User | null) => {
    setFirebaseUser(input);
  };

  const updateUserDetails = (input: any) => {
    setUserDetails(input);
  };
  const updateUserMode = async (input: string) => {
    setUserMode(input);
    await AsyncStorage.setItem('userMode', userMode ? "user" : "owner");
  };
  const updateCurrentDraftId = (input: string) => {
    setCurrentDraftId(input);
  }
  const updateCurrentDraftDetails = (input: DocumentData | null) => {
    setDraftDetails(input);
  }
  const updateDraftImages = (newImage: ImagePicker.ImagePickerAsset[]) => {
    setDraftImages((prevImages) => [...prevImages, ...newImage])
  }
  const resetDraftImages = (newImage: ImagePicker.ImagePickerAsset[]) => {
    setDraftImages(newImage)
  }

  useEffect(() => {
    const fetchAsyncStorage = async () => {
      const value = await AsyncStorage.getItem('userMode');
      setUserMode(value)
    }
    fetchAsyncStorage();
  }, [])
  return (
    <MyContext.Provider
      value={{
        firebaseUser,
        updateFirebaseUser,
        userDetails,
        updateUserDetails,
        userMode,
        updateUserMode,
        currentDraftId,
        updateCurrentDraftId,
        draftDetails,
        updateCurrentDraftDetails,
        draftImages,
        updateDraftImages,
        resetDraftImages,
        publishedListings,
        updatePublishedListings,
        showLoader,
        setShowLoader
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
