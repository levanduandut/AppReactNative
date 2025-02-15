import React from "react"
import {
    Image,
    ImageSourcePropType,
    StyleProp,
    TextInput,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native"
import styles from "./styles"
import Config from "../../../Config"

interface InputType {
    text: string
    value: string
    onChangeText: (text: string) => void
    secureTextEntry?: boolean
    textStyle?: StyleProp<TextStyle>
    iconLeft?: ImageSourcePropType
    iconLeftStyle?: StyleProp<ViewStyle>
    iconRight?: ImageSourcePropType
    iconRightStyle?: StyleProp<ViewStyle>
    inputStyle?: StyleProp<ViewStyle>
    containerStyle?: StyleProp<ViewStyle>
    onPressIconRight?: () => void
}

const ButtonFull = ({
    text,
    textStyle,
    value,
    onChangeText,
    secureTextEntry,
    iconLeft,
    iconLeftStyle,
    iconRight,
    iconRightStyle,
    inputStyle,
    containerStyle,
    onPressIconRight
}: InputType) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={[styles.icLeftStyle, iconLeftStyle]}>
                <Image style={{}} source={iconLeft} />
            </View>
            <TextInput
                style={[styles.textInputStyle, inputStyle]}
                placeholder={text}
                placeholderTextColor={Config.Color.Common.placeholder_color}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
            {iconRight && (
                <TouchableOpacity onPress={onPressIconRight} style={[styles.icRightStyle, iconRightStyle]}>
                    <Image style={{}} source={iconRight} />
                </TouchableOpacity>
            )}

        </View>
    )
}

export default ButtonFull