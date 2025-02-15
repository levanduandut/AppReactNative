import { ColorValue, ImageSourcePropType } from "react-native"

export interface SrcConfig {
    Color: {
        Common: {
            main_Background: ColorValue
            main_text: ColorValue
            sec_text: ColorValue
            primary_color: ColorValue
            title_color: ColorValue
            grey_color_background: ColorValue
            grey_text: ColorValue
            placeholder_color: ColorValue
            border_checkbox: ColorValue
            line_color: ColorValue
            error_color: ColorValue
        }
    }
    Icon: {
        Common: {

        }
        Role: {
            role_institution: ImageSourcePropType
            role_interpreter: ImageSourcePropType
        }
        SignIn: {
            ic_signin_email: ImageSourcePropType
            ic_signin_password: ImageSourcePropType
            ic_signin_eye: ImageSourcePropType
            ic_signin_remember: ImageSourcePropType
            ic_signin_google: ImageSourcePropType
            ic_signin_apple: ImageSourcePropType
        }
        Home: {
            ic_setting: ImageSourcePropType
            ic_logo: ImageSourcePropType
            ic_home_center: ImageSourcePropType
            ic_clock: ImageSourcePropType
            ic_find: ImageSourcePropType
            ic_next: ImageSourcePropType
            ic_avatar_default: ImageSourcePropType
        }
    }
}
