import { MaterialIcons } from '@expo/vector-icons';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { forwardRef } from 'react';
import { Pressable, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { globalColors, globalStyles } from '../globals/global-styles';
interface SearchFieldProps extends TextInputProps {
    label?: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "visible-password";
    ref?: any;
    placeholder: string;
    onPress?: () => void;

    margin?: ViewStyle['margin'];
}


const searchField: React.ForwardRefRenderFunction<TextInput, SearchFieldProps> = ({
    value,
    onChangeText,
    label,
    placeholder,
    keyboardType,
    onPress,
    margin,
    onFocus,
    onBlur
}, ref) => {
    return (
        <View>
            <View style={{ marginTop: margin }}>
                <TextInput style={[globalStyles.input]}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    ref={ref}
                />
                <Pressable style={{
                    position: "absolute",
                    top: '50%',
                    right: 10,
                    transform: [{ translateY: -10 }]
                }}
                    onPress={onPress}
                >
                    {value ? <MaterialIcons name="clear" size={24} color="black" /> : <FontAwesomeIcon icon={faLocationCrosshairs} size={20} color={globalColors.strongBlue} />}
                </Pressable>
            </View>
        </View>
    )
}

export default forwardRef(searchField);