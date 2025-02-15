import { COLORS, FONT_SIZES, FONTFAMILY } from "base-common/Constants"
import { StyleSheet } from "react-native"
import Config from "../../../Config"
import { Styles } from "base-common"

export default StyleSheet.create({
    container: {
        height: 52,
        backgroundColor: Config.Color.Common.main_background,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",
        ...Styles.paddingApp
    },
    text: {
        ...FONTFAMILY.secordFont,
        fontSize: FONT_SIZES.MIDDLE,
        color: COLORS.mainText,
        marginLeft: 12
    },
})