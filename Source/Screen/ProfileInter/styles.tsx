import { Styles } from "base-common"
import { COLORS, FONT_SIZES, FONTFAMILY } from "base-common/Constants"
import { Dimensions, StyleSheet } from "react-native"
import Config from "../../../Config"
const widthScreen = Dimensions.get('window').width


export default StyleSheet.create({
    container: {
        ...Styles.container,
        ...Styles.paddingApp,
        backgroundColor: 'white',
        marginTop: 24,
        marginBottom: 150
    },
    flexOne: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageInfo: {
        height: 328,
        overflow: 'hidden',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    iconReturn: {
        marginLeft: 18
    },
    viewBoxName: {

    },
    textName: {
        ...Styles.titleLv21,
        color: '#040415',
    },
    viewTag: {
        flexDirection: 'row',
        marginTop: 8
    },
    textStar: {
        color: COLORS.greyText,
        ...FONTFAMILY.mainText400,
        fontSize: FONT_SIZES.MEDIUM,
        marginLeft: 4
    },
    textDot: {
        marginHorizontal: 12
    },
    flexRow: {
        flexDirection: 'row',
    },
    birthContainer: {
        marginTop: 32,
        marginRight: 40
    },
    mgtop8: {
        marginTop: 8
    },
    textBirth: {
        color: COLORS.mainText,
        ...FONTFAMILY.mainText500,
        fontSize: FONT_SIZES.MEDIUM,
        marginLeft: 4
    },
    textTitleBirth: {
        ...Styles.titleLv3,
    },
    viewSupport: {
        marginTop: 32
    },
    itemSp: {
        alignItems: 'center',
        marginBottom: 8
    },
    icVerify: {
        marginLeft: 8
    },
    viewBtn: {
        position: "absolute",
        bottom: 20,
        width: widthScreen - 30,
        marginLeft: 15,
    },
    btnClose: {
        backgroundColor: '#F0D3D1',
    },
    textClose: {
        color: '#B42318'
    },
    textChat: {
        color: COLORS.primaryColor
    },
    btnChat: {
        backgroundColor: '#E5E5F4',
        width: (widthScreen - 40) / 2
    },
    btnTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
        marginBottom: 12,
    }
})
