import { COLORS, FONTFAMILY } from "base-common/Constants"
import { StyleSheet } from "react-native"
import Config from "../../../Config"

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 52,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.lineColor,
        alignItems: 'center'
    },
    icLeftStyle: {
        marginLeft: 16,
        marginRight: 12
    },
    icRightStyle: {
        marginRight: 16,
        marginLeft: 12
    },
    textInputStyle: {
        flex: 1,
        fontSize: 14,
        color: '#000000',
        marginRight: 20,
        ...FONTFAMILY.mainText400,
    }

})