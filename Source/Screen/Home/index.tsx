import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Image, ImageSourcePropType, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import languages from "../../../Config/languages";
import { Datas } from "base-common";
import { Constants } from "base-common";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Config from "../../../Config";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Tag } from "base-commponent";
import { TYPEROLE } from "base-common/Constants";

const Home = ({ route }: { route: any }) => {
    const typeRole = route?.params?.type || TYPEROLE.INSTITUTION
    const navigation = useNavigation<any>();
    const [verified, setVerified] = useState<boolean>(false);
    const [dataMission, setDataMission] = useState<any>([]);
    const [dataMissionHistory, setDataMissionHistory] = useState<any>([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVerified(true);
        }, 5000);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        //Fake data
        if (typeRole === TYPEROLE.INSTITUTION) {
            setDataMission(Datas.DataMission);
            setDataMissionHistory(Datas.DataMissionHistory);
        }
    }, [])

    const handleClickFind = () => {
        navigation.navigate(Constants.Screen.FindInter);
    };
    const getStatusInfo = (status: number) => {
        switch (status) {
            case 1:
                return { text: "En cours...", colorText: "#079455", colorView: "rgba(7, 148, 85, 0.1)" };
            case 2:
                return { text: "Prévue", colorText: "#000091", colorView: "rgba(0, 0, 145, 0.1)" };
            case 3:
                return { text: "Terminé", colorText: "#079455", colorView: "rgba(7, 148, 85, 0.1)" };
            default:
                return { text: "En cours...", colorText: "#079455", colorView: "rgba(7, 148, 85, 0.1)" };
        }
    };

    const renderItem = useCallback(({ item }: any) => {
        const { text, colorText, colorView } = getStatusInfo(item?.status);
        return (
            <View style={styles.viewItem}>
                <View style={styles.viewItemContent}>
                    <Image style={styles.avatar} source={item?.icon ? item.icon : Config.Icon.Home.ic_avatar_default} />
                    <View style={styles.viewDes}>
                        <Text style={styles.textItemName}>{item?.name + " - " + item?.language}</Text>
                        <Text style={styles.textItemTime}>{item?.time + " · " + item?.addreess}</Text>
                    </View>
                </View>
                <View style={styles.viewStatus}>
                    <Tag colorText={colorText} colorView={colorView} text={text} />
                </View>
            </View>
        );
    }, [dataMission, dataMissionHistory]);


    const renderFooter = () => {
        if (verified) {
            return (
                <View style={styles.viewFooterSecond}>
                    <View style={styles.findContainer}>
                        <Text style={styles.textFind}>{languages.get("home.description")}</Text>
                        <Button text={languages.get("home.plan")} onPress={() => { }} btnStyle={styles.btnPlan} textStyle={styles.textBtnFind}
                            icon={Config.Icon.Home.ic_clock}
                        />
                        <Button text={languages.get("home.find")} onPress={handleClickFind} btnStyle={styles.btnFind}
                            icon={Config.Icon.Home.ic_find}
                        />
                    </View>
                    <View>
                        <Text style={styles.textMission}>{languages.get("home.mission")}</Text>
                        <FlatList
                            scrollEnabled={true}
                            data={dataMission || []}
                            renderItem={renderItem}
                        />
                    </View>
                    <View style={styles.viewMissionHistory}>
                        <View style={styles.viewMissionHistoryTitle}>
                            <Text style={styles.textMission}>{languages.get("home.history")}</Text>
                            <TouchableOpacity style={styles.iconNext} >
                                <Image source={Config.Icon.Home.ic_next} />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            scrollEnabled={true}
                            data={dataMissionHistory || []}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
            );
        }
        return (
            <>
                <View style={styles.viewBottom}></View>
                <View style={styles.viewFooter}>
                    <Text style={styles.textFooter}>{languages.get("home.verification")}</Text>
                    <Image source={Config.Icon.Home.ic_home_center} />
                    <Text style={styles.textFooterContent}>{languages.get("home.verification.content")}</Text>
                </View>
            </>
        );
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <View style={styles.viewHeader}>
                    <View style={styles.viewHeaderTop}>
                        <Image source={Config.Icon.Home.ic_setting} />
                        <Image source={Config.Icon.Home.ic_logo} />
                    </View>
                </View>
                <View>
                    <Text style={styles.textHeader}>{languages.get("home.title.top")}</Text>
                </View>
            </SafeAreaView>
            {renderFooter()}
        </View>
    );
};

export default Home;
