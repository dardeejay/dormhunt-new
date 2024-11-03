import Toast, { ToastType } from "react-native-toast-message";

export const useToast = () => {
  const showToast = (type: ToastType, text: string, text2?: string) => {
    Toast.show({
      type: type,
      text1: text,
      text2: text2,
      visibilityTime: 2000,
      autoHide: true,
    });
  };

  return { showToast };
};
