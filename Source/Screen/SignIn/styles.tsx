import { Styles } from "base-common"
import { COLORS, FONT_SIZES, FONTFAMILY } from "base-common/Constants"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        ...Styles.container,
        ...Styles.paddingApp
    },
    titleApp: {
        ...Styles.titleLv1,
        ...FONTFAMILY.titleFont
    },
    titleStyle: {
        marginTop: 50
    },
    titleLogin: {
        ...Styles.titleLv2,
        ...FONTFAMILY.secordFont,
        width: 235
    },
    textWelcome: {
        ...Styles.textGrey,
        marginTop: 5,
        marginBottom: 18,
        ...FONTFAMILY.mainText400,
    },
    inputBoxPass: {
        marginTop: 12
    },
    rememberContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rememberBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    textForgot: {
        color: COLORS.primaryColor,
        ...FONTFAMILY.mainText500
    },
    viewOr: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    line: {
        backgroundColor: COLORS.lineColor,
        height: 1,
        flex: 1
    },
    textOr: {
        textAlign: 'center',
        ...FONTFAMILY.mainText400,
        fontSize: FONT_SIZES.MEDIUM,
        color: COLORS.greyText
    },
    viewSocial: {
        marginTop: 16
    },
    containerBtn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 12
    },
    button: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.lineColor,
        justifyContent: "center",
        alignItems: "center",
    },
    iconBtn: {
        width: 22,
        height: 22,
        resizeMode: "contain",
    },
    viewBtn: {
        position: "absolute",
        bottom: 30,
        width: '100%',
        marginLeft: 15,
    },
    textRegister: {
        color: COLORS.greyText,
        fontSize: FONT_SIZES.MEDIUM,
        textAlign: "center",
        marginTop: 25,
        ...FONTFAMILY.mainText500
    },
    textError: {
        marginTop: 5,
        color: COLORS.errorColor,
        fontSize: FONT_SIZES.SMALL,
        textAlign: "right",
        ...FONTFAMILY.mainText500
    }

})
