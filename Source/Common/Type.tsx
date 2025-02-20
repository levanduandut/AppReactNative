import { ColorValue, ImageSourcePropType } from "react-native"

export interface SrcConfig {
    Color: {
        Common: {
            main_background: ColorValue
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
            ic_back: ImageSourcePropType
            ic_dot: ImageSourcePropType
            ic_close: ImageSourcePropType
            ic_star: ImageSourcePropType
            ic_chat: ImageSourcePropType
            ic_call: ImageSourcePropType
            ic_note: ImageSourcePropType
            ic_next_detail: ImageSourcePropType
            ic_plus: ImageSourcePropType
            ic_close_square: ImageSourcePropType
            ic_down: ImageSourcePropType
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
            ic_home_center_error: ImageSourcePropType
            ic_on: ImageSourcePropType
            ic_off: ImageSourcePropType
            ic_warning: ImageSourcePropType
            ic_company_default: ImageSourcePropType
        }
        FindInter: {
            ic_pin: ImageSourcePropType
            ic_note: ImageSourcePropType
        }
        Info: {
            ic_return: ImageSourcePropType
            ic_info_default: ImageSourcePropType
            ic_cake: ImageSourcePropType
            ic_city: ImageSourcePropType
            ic_verify: ImageSourcePropType
            ic_close: ImageSourcePropType,
            ic_progress: ImageSourcePropType
            ic_separator: ImageSourcePropType
        }
        SignUp: {
            ic_bulding: ImageSourcePropType
        }
    }
}
