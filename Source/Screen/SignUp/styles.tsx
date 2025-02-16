import { Styles } from "base-common"
import { COLORS, FONT_SIZES, FONTFAMILY } from "base-common/Constants"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        ...Styles.container,
        ...Styles.paddingApp
    },
    textWelcome: {
        ...Styles.textGrey,
        marginTop: 5,
        marginBottom: 18,
        lineHeight: 20,
        fontSize: FONT_SIZES.MEDIUM,
        ...FONTFAMILY.mainText400,
    },
    inputBoxPass: {
        marginTop: 12,
        marginBottom: 12
    },
    textError: {
        marginTop: 5,
        color: COLORS.errorColor,
        fontSize: FONT_SIZES.SMALL,
        textAlign: "right",
        ...FONTFAMILY.mainText500
    },
    inputNameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12
    },
    inputName: {
        width: "48%"
    },
    mgBottom: {
        marginBottom: 12
    },
    textTitleDoc: {
        ...Styles.titleLv3
    },
    viewDoc: {
        marginTop: 32
    },
    viewBtn: {
        position: "absolute",
        bottom: 30,
        width: '100%',
        marginLeft: 15,
    },
    errorBorder: {
        borderColor: COLORS.errorColor,
    },

})
