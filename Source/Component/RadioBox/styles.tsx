import { COLORS, FONTFAMILY } from "base-common/Constants"
import { StyleSheet } from "react-native"
import Config from "../../../Config"

export default StyleSheet.create({
    container: {
        width: 16,
        height: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Config.Color.Common.border_checkbox,
    },
    containerChecked: {
        width: 16,
        height: 16,
        borderRadius: 16,
        backgroundColor: COLORS.primaryColor
    }

})