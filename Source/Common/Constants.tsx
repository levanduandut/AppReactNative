import { Dimensions, PixelRatio } from "react-native";

// Lấy kích thước màn hình hiện tại
const { width, height } = Dimensions.get("window");

const scaleFont = (size: number) => {
  const standardScreenHeight = 812;
  return Math.round(PixelRatio.roundToNearestPixel(size * (height / standardScreenHeight)));
};

// Định nghĩa FONT_SIZES
export const FONT_SIZES = {
  SMALL: scaleFont(12),
  MEDIUM: scaleFont(16),
  LARGE: scaleFont(20),
  XLARGE: scaleFont(24),
};

export default {
  FONT_SIZES,
};
