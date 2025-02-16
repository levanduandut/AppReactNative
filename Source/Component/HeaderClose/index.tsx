import React from "react"
import {
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
import Config from "../../../Config"
import { useNavigation } from "@react-navigation/native"

interface HeaderCloseType {
    text: string
}

const HeaderClose = ({
    text,
}: HeaderCloseType) => {
    const navigation = useNavigation<any>();
    return (
        <View
            style={styles.container}
        >
            <Image source={Config.Icon.Common.ic_dot} />
            <Text
                numberOfLines={1}
                style={styles.text}
            >
                {text}
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={Config.Icon.Common.ic_close} />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderClose