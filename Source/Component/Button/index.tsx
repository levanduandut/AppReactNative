import React from "react"
import {
    Image,
    ImageSourcePropType,
    ImageStyle,
    StyleProp,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native"
import styles from "./styles"

interface ButtonType {
    text: string
    textStyle?: StyleProp<TextStyle>
    icon?: ImageSourcePropType
    iconStyle?: StyleProp<ImageStyle>
    btnStyle?: StyleProp<ViewStyle>
    onPress: () => void
}

const ButtonFull = ({
    text,
    textStyle,
    icon,
    iconStyle,
    btnStyle,
    onPress,
}: ButtonType) => {
    return (
        <TouchableOpacity
            style={[styles.container, btnStyle]}
            onPress={onPress}
        >
            <Image style={[styles.icon, iconStyle]} source={icon} />
            <Text
                style={[styles.text, textStyle]}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonFull