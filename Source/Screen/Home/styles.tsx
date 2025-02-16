import { Styles } from "base-common"
import { COLORS, FONT_SIZES, FONTFAMILY } from "base-common/Constants"
import { Dimensions, StyleSheet } from "react-native"
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        ...Styles.container,
        backgroundColor: COLORS.greyColorBg
    },
    header: {
        backgroundColor: COLORS.primaryColor,
        height: 240,
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
        fontSize: FONT_SIZES.MIDDLE,
        color: COLORS.secText,
        lineHeight: 28,
        width: 140,
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
        paddingHorizontal: 15,
        flex: 1
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
    },
    viewItemContent: {
        flexDirection: "row",
    },
    spDoc: {
        paddingHorizontal: 18,
        paddingVertical: 20,
        backgroundColor: '#ffffff',
        marginHorizontal: 15,
        borderRadius: 8,
        marginBottom: 100,
        ...Styles.shadow
    },
    textSpTitle: {
        ...FONTFAMILY.secordFont,
        fontSize: FONT_SIZES.NORMAL,
        marginBottom: 15
    },
    viewSpDocItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    divider: {
        borderBottomWidth: 1,
        borderColor: "#ccc",
        marginVertical: 5,
    },
    viewSpDocContainer: {
        marginVertical: 5,
    },
    viewBtn: {
        position: "absolute",
        bottom: 30,
        width: width - 30,
        marginLeft: 15
    },
    viewMoney: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    viewMoneyItem: {
        width: '50%',
    },
    button: {
        padding: 10,
        borderRadius: 12,
        flexDirection: "row",
        marginTop: 20
    },
    viewModeOn: {
        backgroundColor: 'rgba(0, 0, 145, 0.05)',
    },
    viewModeOff: {
        backgroundColor: '#F2F4F7',
    },
    iconContainer: {
        width: 58,
        height: 58,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textOnOff: {
        ...Styles.titleLv3
    },
    textOnOffOn: {
        color: COLORS.primaryColor
    },
    textOnOffOff: {
        color: COLORS.titleColor
    },
    textOnDetail: {
        ...FONTFAMILY.mainText400,
        fontSize: FONT_SIZES.SMALL,
        width: 200,
    },
    textContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    textMoney: {
        ...Styles.titleLv21,
        color: COLORS.mainText
    },
    textMoneySec: {
        color: COLORS.greyText,
        ...FONTFAMILY.mainText400,
        fontSize: FONT_SIZES.MEDIUM
    },
    warningContainer: {
        marginTop: 32,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 20,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        ...Styles.shadow,
    },
    orangeBar: {
        width: 6,
        backgroundColor: "#E04F16",
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        height: 134,
    },
    scrollContainer: {
        paddingBottom: 40, 
    },
    viewWarning: {
        padding: 12,
    },
    textWarning: {
        ...Styles.titleLv3,
        color: "#E04F16",
        marginBottom: 12
    },
    viewButtonWarning: {
        marginTop: 8,
        borderRadius: 10,
        alignSelf: "flex-end",
        paddingVertical: 8,
        paddingHorizontal: 15,
        width: 127,
        borderWidth: 1,
        borderColor: COLORS.lineColor
    },
    viewWarningContent: {
        width: "90%" 
    }
})
