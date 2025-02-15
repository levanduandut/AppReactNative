import React, { useEffect, useState } from "react";
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import languages from "../../../Config/languages";
import { Datas } from "base-common";
import { Constants } from "base-common";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Config from "../../../Config";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "base-commponent";

const FindInter = () => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            
        </View>
    );
};

export default FindInter;
