import { Styles } from "base-common"
import { COLORS, FONT_SIZES, FONTFAMILY } from "base-common/Constants"
import { StyleSheet } from "react-native"
import Config from "../../../Config"

export default StyleSheet.create({
    container: {
        ...Styles.container,
        ...Styles.paddingApp,
        backgroundColor: 'white'
    },
    containerContent: {
        marginTop: 11
    },
    title: {
        ...Styles.titleLv3,
        fontSize: FONT_SIZES.MIDDLE,
    },
    viewTitle: {
        width: '80%',
    },
    titleSec: {
        marginTop: 6,
        ...Styles.titleLv3,
    },
    image: {
        width: 18,
        height: 18,
    },
    viewTitleSec: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginTop: 8,
        marginBottom: 24
    },
    textAddress: {
        ...FONTFAMILY.mainText500,
        color: COLORS.titleColor
    },
    textDescription: {
        ...FONTFAMILY.mainText400,
        color: COLORS.greyText,
        marginTop: 8
    },
    viewBtn: {
        position: "absolute",
        bottom: 45,
        width: '100%',
        marginLeft: 15,
    },
    btnCancel: {
        backgroundColor: "#E5E5F4"
    },
    btnCall: {
        backgroundColor: "#E5E5F4",
        marginTop: 20
    },
    textCancel: {
        color: COLORS.primaryColor
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        // margin: 20,
        width: '85%',
        backgroundColor: 'white',
        borderRadius: 20,
        // padding: 15,
        paddingTop: 0,
        alignItems: 'center',
        shadowRadius: 4,
        elevation: 5,
    },
    modalViewParent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    modalText: {
        ...Styles.titleLv21,
        textAlign: 'center',
        marginTop: 28,
        marginBottom: 20
    },
    imageAvatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20
    },
    modalTextName: {
        ...FONTFAMILY.mainText500,
        fontSize: FONT_SIZES.NORMAL,
        color: COLORS.titleColor,
        marginBottom: 8
    },
    viewStar: {
        flexDirection: 'row',
        gap: 4
    },
    textStar: {
        color: COLORS.greyText,
        ...FONTFAMILY.mainText400,
        fontSize: FONT_SIZES.MEDIUM,
        marginBottom: 32
    },
    progressBarContainer: {
        position: "absolute",
        top: 0,
        left: 4,
        width: "98%",
        height: 8,
        backgroundColor: "transparent",
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30,
        overflow: "hidden",
    },
    
    progressBar: {
        height: "100%",
        backgroundColor: "#00008B", // Màu xanh đậm như ảnh
    },
    mainModalContent: {
        margin: 15,
        width: '100%',
        padding: 15,
        alignItems: 'center'
    }
})
