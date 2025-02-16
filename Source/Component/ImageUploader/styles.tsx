import { StyleSheet } from "react-native";
import { COLORS } from "base-common/Constants";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    imageWrapper: {
        width: 120,
        height: 120,
        borderRadius: 10,
        overflow: "hidden",
        position: "relative",
        marginRight: 10,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    removeButton: {
        position: "absolute",
        top: 5,
        right: 5,
        borderRadius: 15,
        padding: 5,
    },
    uploadBox: {
        width: 120,
        height: 120,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.lineColor,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.lineColor,
    },
    iconSize: {
        width: 30,
        height: 30,
    },
});
