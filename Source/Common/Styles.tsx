import { StyleSheet } from 'react-native'
import Config from '../../Config';
import { COLORS, FONT_SIZES } from './Constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Config.Color.Common.main_background
    },
    titleLv1: {
        fontSize: FONT_SIZES.XLARGE,
        color: COLORS.primaryColor,
        ...Config.Font.fontKumbhSansSemiBold
    },
    titleLv2: {
        fontSize: FONT_SIZES.LARGE,
        color: COLORS.titleColor,
        ...Config.Font.fontGilroyBold
    },
    titleLv3: {
        fontSize: FONT_SIZES.NORMAL,
        color: COLORS.titleColor,
        ...Config.Font.fontGilroyBold
    },
    textGrey: {
        fontSize: FONT_SIZES.MEDIUM,
        color: COLORS.greyText,
        ...Config.Font.fontDMSans400
    },
    paddingApp: {
        paddingHorizontal: 15
    },
    shadow: {
        shadowColor: "#6060602E",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        elevation: 5
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24
    }
});
