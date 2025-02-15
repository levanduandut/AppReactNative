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
    titleGoodMorning: {
        ...Styles.titleLv2,
        ...FONTFAMILY.secordFont
    },
    titleStyle: {
        marginTop: 50
    },
    roleContainer: {
        backgroundColor: COLORS.greyColorBg,
        height: 250,
        borderRadius: 12,
        marginBottom: 12,
        alignItems: 'center',
        paddingTop: 10
    },
    textPleaseChoose: {
        ...Styles.textGrey,
        marginTop: 5,
        marginBottom: 18,
        ...FONTFAMILY.mainText400,
    },
    textRole: {
        color: COLORS.primaryColor,
        fontSize: FONT_SIZES.NORMAL,
        ...FONTFAMILY.secordFont,
        marginTop: 24
    }

})
