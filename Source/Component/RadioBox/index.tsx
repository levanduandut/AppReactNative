import React from "react"
import {
    TouchableOpacity,
} from "react-native"
import styles from "./styles"

interface RadioBoxType {
    isCheked: boolean
    onPress: () => void
}

const RadioBox = ({
    isCheked,
    onPress
}: RadioBoxType) => {
    if (isCheked) {
        return (
            <TouchableOpacity onPress={onPress} style={styles.containerChecked}>
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

export default RadioBox