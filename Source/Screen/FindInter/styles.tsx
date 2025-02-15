import { Styles } from "base-common"
import { COLORS, FONT_SIZES, FONTFAMILY } from "base-common/Constants"
import { StyleSheet } from "react-native"
import Config from "../../../Config"

export default StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: Config.Color.Common.main_background,
    },
    container: {
        ...Styles.container,
        ...Styles.paddingApp,
        backgroundColor: Config.Color.Common.main_background,
    },
    textContent: {
        ...Styles.textGrey
    },
    textTitleLang: {
        ...Styles.titleLv3,
        marginTop: 32
    },
    itemLanguage: {
        backgroundColor: "#e1e1e1",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        margin: 5,
        marginLeft: 0
    },
    textLanguage: {
        ...FONTFAMILY.mainText500,
        fontSize: FONT_SIZES.MEDIUM
    },
    selectedButton: {
        backgroundColor: "#1B1D29",
    },
    selectedText: {
        color: "#FFFFFF"
    },
    plusButton: {
        flexDirection: "row",
        backgroundColor: "#E5E5F4",
    },
    plusText: {
        color: COLORS.primaryColor,
        fontWeight: "600",
    },
    listLanguage: {
    },
    viewRadio: {
        flexDirection: "row",
        marginTop: 8
    },
    textRadio: {
        ...FONTFAMILY.mainText500,
        fontSize: FONT_SIZES.MEDIUM,
        color: COLORS.titleColor,
        marginLeft: 8,
        marginRight: 12
    },
    buttonLocation: {
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        padding: 12,
        borderColor: COLORS.lineColor,
        backgroundColor: Config.Color.Common.main_background,
        alignItems: "center",
        flexDirection: "row",
        marginTop: 16, 
        gap: 14
    },
    textLocation: {
        ...FONTFAMILY.mainText400,
        fontSize: FONT_SIZES.MEDIUM,
        color: COLORS.titleColor,
    },
    textInputDes: {
        borderWidth: 1,
        borderColor: COLORS.lineColor,
        borderRadius: 10,
        padding: 12,
        paddingLeft: 32,
        marginTop: 16,
        height: 220,
    },
    viewBtn: {
        position: "absolute",
        bottom: 10,
        width: '100%',
        marginLeft: 15,
    }

})
