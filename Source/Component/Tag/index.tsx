import React from "react"
import {
    ColorValue,
    Image,
    ImageSourcePropType,
    ImageStyle,
    StyleProp,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native"
import styles from "./styles"

interface TagType {
    text: string
    colorText?: ColorValue
    colorView?: ColorValue
}

const Tag = ({
    text,
    colorText,
    colorView,
}: TagType) => {
    return (
        <View
            style={[styles.container, { backgroundColor: colorView }]}
        >
            <Text
                style={[styles.text, { color: colorText }]}
            >
                {text}
            </Text>
        </View>
    )
}

export default Tag