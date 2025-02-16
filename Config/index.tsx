import { SrcConfig } from "base-common"
import languages from "./languages"
import fonts from "./fonts"

const Config: SrcConfig = {
    Color: {
        Common: {
            main_background: "#ffffff",
            main_text: "#000000",
            sec_text: "#ffffff",
            primary_color: "#000091",
            title_color: "#182230",
            grey_color_background: "#F8F8F8",
            grey_text: "#667085",
            placeholder_color: "#667085",
            border_checkbox: "#D0D5DD",
            line_color: "#E4E7EC",
            error_color: "#FF0000",
        }
    },
    Icon: {
        Common: {
            ic_back: require("./image/ic_back.png"),
            ic_dot: require("./image/header_dot.png"),
            ic_close: require("./image/header_close.png"),
            ic_star: require("./image/ic_star.png"),
            ic_chat: require("./image/ic_chat.png"),
            ic_call: require("./image/ic_call.png"),
            ic_note: require("./image/ic_note.png"),
            ic_next_detail: require("./image/ic_next_detail.png"),
        },
        Role: {
            role_institution: require("./image/role_institution.png"),
            role_interpreter: require("./image/role_interpreter.png"),
        },
        SignIn: {
            ic_signin_email: require("./image/signin_input_email.png"),
            ic_signin_password: require("./image/signin_input_pass.png"),
            ic_signin_eye: require("./image/signin_input_pass_eye.png"),
            ic_signin_remember: require("./image/signin_remember_checkbox.png"),
            ic_signin_google: require("./image/signin_google.png"),
            ic_signin_apple: require("./image/signin_apple.png"),
        },
        Home: {
            ic_setting: require("./image/home_setting.png"),
            ic_logo: require("./image/home_logo.png"),
            ic_home_center: require("./image/home_center.png"),
            ic_clock: require("./image/home_clock.png"),
            ic_find: require("./image/home_find.png"),
            ic_next: require("./image/home_next.png"),
            ic_avatar_default: require("./image/home_avatar_test.png"),
        },
        FindInter: {
            ic_pin: require("./image/find_pin.png"),
            ic_note: require("./image/find_note.png"),
        },
        Info: {
            ic_return: require("./image/info_return.png"),
            ic_info_default: require("./image/info_background.png"),
            ic_cake: require("./image/info_cake.png"),
            ic_city: require("./image/info_city.png"),
            ic_verify: require("./image/info_verify.png"),
            ic_close: require("./image/info_close.png"),
            ic_progress: require("./image/ic_progress.png"),
            ic_separator: require("./image/ic_separator.png"),
        }
    },
}

export default {
    ...Config,
    Language: languages,
    Font: fonts
}