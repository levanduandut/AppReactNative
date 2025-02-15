import { FONTFAMILY } from "base-common/Constants"
import { StyleSheet } from "react-native"
import Config from "../../../Config"

export default StyleSheet.create({
    container: {
        width: 16,
        height: 16,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Config.Color.Common.border_checkbox,
    }

})