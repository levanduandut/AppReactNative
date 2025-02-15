import { COLORS, FONT_SIZES, FONTFAMILY } from "base-common/Constants"
import { StyleSheet } from "react-native"
import Config from "../../../Config"
import { Styles } from "base-common"

export default StyleSheet.create({
    container: {
        height: 52,
        backgroundColor: Config.Color.Common.main_background,
        borderRadius: 99,
        alignItems: "center",
        alignSelf: "flex-end",
        flexDirection: "row",
        ...Styles.shadow,
        ...Styles.paddingApp,
        shadowColor: "#a8a4a4",
    },
    text: {
        ...FONTFAMILY.secordFont,
        fontSize: FONT_SIZES.MEDIUM,
        color: COLORS.primaryColor,
        marginLeft: 6,
        width: 80,
    },
})