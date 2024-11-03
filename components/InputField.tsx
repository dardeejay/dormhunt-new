import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableHighlight,
  View,
  ViewStyle,
} from "react-native";


import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import globalColors from "@globals/colors";
interface InputFieldsProps extends TextInputProps {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?:
  | "default"
  | "number-pad"
  | "decimal-pad"
  | "numeric"
  | "email-address"
  | "phone-pad"
  | "visible-password";
  secureTextEntry?: boolean;
  placeholder?: string;
  passwordToggle?: boolean;
  onPress?: () => void;
  customButton?: boolean;
  customButtonIcon?: any;
  customButtonIconFamily?: any;
  error?: boolean;
  withLabel?: boolean;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldsProps> = ({
  value,
  onChangeText,
  label,
  placeholder,
  keyboardType,
  secureTextEntry,
  passwordToggle,
  customButton,
  customButtonIcon,
  customButtonIconFamily,
  error,
  onPress,
  style,
  withLabel = true, 
  disabled = false
}) => {
  return (
    <View style={[styles.container, style ]}>
      {withLabel && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer,  error && styles.inputError]}>
        <TextInput
          style={[styles.input]}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          editable={!disabled}
        />
        
        {customButton && (
          <TouchableHighlight
            style={{
              position: "absolute",
              top: '50%',
              right: 10,
              transform: [{ translateY: -10 }]

            }}
            underlayColor={"transparent"}
            onPress={onPress}
          >
            <Ionicons
              name={customButtonIcon}
              size={scale(18)}
              color={globalColors.strongBlue}
            />
          </TouchableHighlight>
        )}
        {passwordToggle &&
          (secureTextEntry ? (
            <TouchableHighlight
              style={{
                position: "absolute",
                top: '50%',
                right: 10,
                transform: [{ translateY: -10 }]

              }}
              onPress={onPress}
              underlayColor={"transparent"}
            >
              <Ionicons name="eye" size={scale(18)} color={globalColors.strongBlue} />

            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{
                position: "absolute",
                top: '50%',
                right: 10,
                transform: [{ translateY: -10 }]

              }}
              underlayColor={"transparent"}

              onPress={onPress}
            >
              <Ionicons name="eye-off" size={scale(18)} color={globalColors.strongBlue} />

            </TouchableHighlight>
          ))}
      </View>
      {error && <Text style={styles.errorText}>This field is required.</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(10),
  },
  label: {
    color: "#000000",
    fontFamily: "Montserrat-Light",
    marginBottom: 5,
    fontSize: 12,
  },
  input: {

    padding: verticalScale(12),
    fontFamily: "Montserrat",
    
  },
  inputContainer: {
    borderColor: globalColors.strongBlue,
    backgroundColor: globalColors.lightBlue,
    overflow: 'hidden',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
  errorText:{
    color: "red",
    fontSize: 12,
    fontFamily: "Montserrat",
  }
});

export default InputField;
