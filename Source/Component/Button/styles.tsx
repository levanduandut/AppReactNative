import { COLORS, FONT_SIZES, FONTFAMILY } from "base-common/Constants"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        height: 52,
        backgroundColor: COLORS.primaryColor,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    text: {
        ...FONTFAMILY.mainText700,
        fontSize: FONT_SIZES.MEDIUM,
        color: COLORS.secText
    },
    icon: {
        marginRight: 10
    }
})