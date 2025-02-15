import React from "react"
import {
    Image,
    TouchableOpacity,
} from "react-native"
import styles from "./styles"
import Config from "../../../Config"

interface CheckBoxType {
    isCheked: boolean
    onPress: () => void
}

const CheckBox = ({
    isCheked,
    onPress
}: CheckBoxType) => {
    if (isCheked) {
        return (
            <TouchableOpacity onPress={onPress}>
                <Image source={Config.Icon.SignIn.ic_signin_remember} />
            </TouchableOpacity>
        )
    }
    else {
        return (
            <TouchableOpacity onPress={onPress} style={styles.container}>
            </TouchableOpacity>
        )
    }

}

export default CheckBox