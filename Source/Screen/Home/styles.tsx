import { Styles } from "base-common"
import { COLORS, FONT_SIZES, FONTFAMILY } from "base-common/Constants"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        ...Styles.container,
        backgroundColor: COLORS.greyColorBg
    },
    header: {
        backgroundColor: COLORS.primaryColor,
        height: 200,
        ...Styles.paddingApp
    },
    viewHeader: {
        alignItems: "flex-end"
    },
    viewHeaderTop: {
        flexDirection: 'row',
        gap: 10,
    },
    textHeader: {
        ...FONTFAMILY.secordFont,
        fontSize: FONT_SIZES.LARGE,
        color: COLORS.secText,
        marginTop: 10
    },
    viewBottom: {
        backgroundColor: COLORS.greyColorBg,
        marginTop: -20,
        height: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    viewFooter: {
        marginTop: 50,
        paddingHorizontal: 30,
        alignItems: "center"
    },
    textFooter: {
        ...FONTFAMILY.secordFont,
        fontSize: FONT_SIZES.MIDDLE,
        color: COLORS.primaryColor,
        textAlign: "center",
        lineHeight: 28,
        marginBottom: 21
    },
    textFooterContent: {
        ...FONTFAMILY.mainText400,
        fontSize: FONT_SIZES.MEDIUM,
        color: COLORS.greyText,
        textAlign: "center",
        paddingHorizontal: 30,
        marginTop: 16
    },
    viewFooterSecond: {
        marginTop: -50,
        paddingHorizontal: 15
    },
    findContainer: {
        // height: 200,
        borderRadius: 20,
        backgroundColor: "#ffffff",
        ...Styles.shadow,
        paddingHorizontal: 12,
        paddingTop: 24,
        paddingBottom: 12
    },
    textFind: {
        ...FONTFAMILY.mainText400,
        color: COLORS.greyText,
        fontSize: FONT_SIZES.SMALL,
        lineHeight: 18
    },
    btnPlan: {
        backgroundColor: "#E5E5F4",
        marginTop: 12
    },
    textBtnFind: {
        color: COLORS.primaryColor
    },
    btnFind: {
        marginTop: 12
    },
    textMission: {
        ...FONTFAMILY.secordFont,
        fontSize: FONT_SIZES.NORMAL,
        marginTop: 22,
        marginBottom: 12
    },
    viewItem: {
        backgroundColor: "#ffffff",
        padding: 10,
        borderRadius: 10,
        marginBottom: 12,
        ...Styles.shadow,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    viewDes: {
        marginLeft: 10
    },
    textItemName: {
        ...FONTFAMILY.mainText500,
        fontSize: FONT_SIZES.MEDIUM,
        color: '#182230',
        marginBottom: 5
    },
    textItemTime: {
        ...FONTFAMILY.mainText400,
        color: COLORS.greyText
    },
    avatar: {
        ...Styles.avatar
    },
    viewStatus: {
        alignItems: "flex-start", 
        flexDirection: "row",
    },
    viewMissionHistory: {
        // marginTop: 32
    },
    viewMissionHistoryTitle: {  
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    textMissionHistory: {
        ...FONTFAMILY.mainText500,
        fontSize: FONT_SIZES.MEDIUM,
        color: '#182230',
        marginBottom: 5
    },
    iconNext: {
        marginTop: 12
    }
})
