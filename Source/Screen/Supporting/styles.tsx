import { Styles } from "base-common"
import { COLORS, FONT_SIZES, FONTFAMILY } from "base-common/Constants"
import { Dimensions, StyleSheet } from "react-native"
const { width, height } = Dimensions.get('window')


export default StyleSheet.create({
    container: {
        ...Styles.container,
        // ...Styles.paddingApp
    },
    mainContainer: {
        ...Styles.paddingApp
    },
    textContent: {
        ...FONTFAMILY.mainText400,
        fontSize: FONT_SIZES.MEDIUM,
        color: COLORS.greyText,
    },
    mgBtn8: {
        marginBottom: 8
    },
    textSpTitle: {
        ...FONTFAMILY.secordFont,
        fontSize: FONT_SIZES.NORMAL,
        marginBottom: 8,
        marginTop: 32
    },
    viewBtn: {
        position: "absolute",
        bottom: 30,
        width: width - 30,
        marginLeft: 15
    }
})
