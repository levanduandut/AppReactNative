import Config from "../../Config";

export const FONT_SIZES = {
  SMALL: 12,
  MEDIUM: 14,
  NORMAL: 16,
  MIDDLE: 22,
  LARGE: 28,
  XLARGE: 34,
};

export const COLORS = {
  primaryColor: Config.Color.Common.primary_color,
  titleColor: Config.Color.Common.title_color,
  greyColorBg: Config.Color.Common.grey_color_background,
  greyText: Config.Color.Common.grey_text,
  placeholder: Config.Color.Common.placeholder_color,
  lineColor: Config.Color.Common.line_color,
  mainText: Config.Color.Common.main_text,
  secText: Config.Color.Common.sec_text,
  errorColor: Config.Color.Common.error_color
};

export const FONTFAMILY = {
  titleFont: Config.Font.fontKumbhSansSemiBold,
  secordFont: Config.Font.fontGilroyBold,
  mainText400: Config.Font.fontDMSans400,
  mainText500: Config.Font.fontDMSans500,
  mainText700: Config.Font.fontDMSans700
};

export const TYPEROLE = {
  INSTITUTION: "INSTITUTION",
  INTERPRETER: "INTERPRETER"
};

export const TYPE_LOCATION = {
  Distanciel: "Distanciel",
  Présentiel: "Présentiel"
};

export const Screen = {
    Role: "Role" as const,
    SignIn: "SignIn" as const,
    Home: "Home" as const,
    FindInter: "FindInter" as const
};

export default {
  FONT_SIZES,
  COLORS,
  FONTFAMILY,
  TYPEROLE,
  TYPE_LOCATION,
  Screen,
  Account: {
    INSTITUTION : {
      email: "a@gmail.com",
      password: "123456",
    },
    INTERPRETER : {
      email: "b@gmail.com",
      password: "123456",
    }
  },
};
