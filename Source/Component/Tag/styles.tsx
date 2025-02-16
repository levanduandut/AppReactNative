import { COLORS, FONT_SIZES, FONTFAMILY } from "base-common/Constants"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginLeft: 4,
        borderRadius: 6
    },
    text: {
        ...FONTFAMILY.mainText500,
        fontSize: FONT_SIZES.SMALL,
    },
})