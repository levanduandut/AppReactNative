import React from "react";
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import languages from "../../../Config/languages";
import { Datas } from "base-common";
import { Constants } from "base-common";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

type RootStackParamList = {
    SignIn: { type: string };
};

const Role = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const RoleButton = ({ urlImage, text, type }: { urlImage: ImageSourcePropType; text: string; type: string }) => (
        <TouchableOpacity onPress={() => chooseRole(type)} style={styles.roleContainer}>
            <Image source={urlImage} />
            <Text style={styles.textRole}>{text}</Text>
        </TouchableOpacity>
    );

    const chooseRole = (type: string) => {
        navigation.navigate(Constants.Screen.SignIn, { type });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleApp}>{languages.get("role.title.top")}</Text>
            <View style={styles.titleStyle}>
                <Text style={styles.titleGoodMorning}>{languages.get("role.good.morning")}</Text>
                <Text style={styles.textPleaseChoose}>{languages.get("role.please.choose")}</Text>
            </View>
            <View>
                {Datas.RoleScreen.map((role, index) => (
                    <RoleButton key={index} urlImage={role.icon} text={role.text} type={role.type} />
                ))}
            </View>
        </SafeAreaView>
    );
};

export default Role;
