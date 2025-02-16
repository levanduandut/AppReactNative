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

interface HeaderType {
    text: string
}

const Header = ({
    text,
}: HeaderType) => {
     const navigation = useNavigation<any>();
    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={Config.Icon.Common.ic_back} />
            </TouchableOpacity>
            <Text
                style={styles.text}
            >
                {text}
            </Text>
        </View>
    )
}

export default Header