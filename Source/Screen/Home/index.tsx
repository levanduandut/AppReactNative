import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import languages from "../../../Config/languages";
import { Constants } from "base-common";
import { useNavigation } from "@react-navigation/native";
import Config from "../../../Config";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Tag } from "base-commponent";
import { TYPEROLE } from "base-common/Constants";
import { DataMission, DataMissionHistory, DataMissionHistoryInter, DataMissionInter, interpreter } from "base-common/Datas";

const Home = ({ route }: { route: any }) => {
    const typeRole = route?.params?.type || TYPEROLE.INTERPRETER
    const navigation = useNavigation<any>();
    const [verified, setVerified] = useState<boolean>(false);
    const [dataMission, setDataMission] = useState<any>([]);
    const [dataMissionHistory, setDataMissionHistory] = useState<any>([]);
    const [modeOn, setModeOn] = useState<boolean>(true);

    //Fake Data
    const Interpreter = interpreter;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVerified(true);
        }, 5000);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        //Fake data
        if (typeRole === TYPEROLE.INSTITUTION) {
            setDataMission(DataMission);
            setDataMissionHistory(DataMissionHistory);
        }
        if (typeRole === TYPEROLE.INTERPRETER) {
            setDataMission(DataMissionInter);
            setDataMissionHistory(DataMissionHistoryInter);
        }
    }, [])

    const handleClickFind = () => {
        navigation.navigate(Constants.Screen.FindInter);
    };

    const handleClickItemVerify = (value: boolean, name: string) => {
        if (!value) {
            navigation.navigate(Constants.Screen.Supporting, { name });
        }
    }
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

    const renderItemInter = useCallback(({ item }: any) => {
        const { text, colorText, colorView } = getStatusInfo(item?.status);
        return (
            <View style={styles.viewItem}>
                <View style={styles.viewItemContent}>
                    <Image style={styles.avatar} source={item?.icon ? item.icon : Config.Icon.Home.ic_company_default} />
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

    const buttonStyle = [
        styles.button,
        modeOn ? styles.viewModeOn : styles.viewModeOff
    ];

    const renderFooter = () => {
        if (verified) {
            if (typeRole === TYPEROLE.INSTITUTION) {
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
            else {
                return (
                    <View style={styles.viewFooterSecond}>
                        <View style={styles.findContainer}>
                            <View style={styles.viewMoney}>
                                <View style={styles.viewMoneyItem}>
                                    <Text style={styles.textMoney}>2 150€</Text>
                                    <Text style={styles.textMoneySec}>Gagné en juin</Text>
                                </View>
                                <View style={styles.viewMoneyItem}>
                                    <Text style={styles.textMoney}>4.9/5</Text>
                                    <Text style={styles.textMoneySec}>Gagné en juin</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => setModeOn(!modeOn)} style={buttonStyle}>
                                <View style={styles.iconContainer}>
                                    <Image source={modeOn ? Config.Icon.Home.ic_off : Config.Icon.Home.ic_on} />
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={[styles.textOnOff, modeOn ? styles.textOnOffOff : styles.textOnOffOn]}>{modeOn ? "Vous êtes en ligne !" : "Vous êtes hors ligne !"}</Text>
                                    <Text style={[styles.textOnDetail, modeOn ? styles.textOnOffOff : styles.textOnOffOn]}>{modeOn ? "Nous vous informerons lorsqu’une mission vous sera attribuée." : "Appuyez sur le bouton pour passer en ligne et recevoir des missions."}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <ScrollView
                            style={styles.scrollContainer}
                            contentContainerStyle={{ flexGrow: 1 }}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.warningContainer}>
                                <View style={styles.orangeBar} />
                                <View style={[styles.viewHeaderTop, styles.viewWarning]}>
                                    <Image source={Config.Icon.Home.ic_warning} />
                                    <View style={{ width: "90%" }}>
                                        <Text style={styles.textWarning}>Contrat non signé</Text>
                                        <Text style={styles.textMoneySec}>
                                            Vous avez un contrat non signé qui arrive à échéance.
                                            Veuillez le finaliser avant le 11 novembre.
                                        </Text>
                                        <TouchableOpacity style={styles.viewButtonWarning}>
                                            <Text>Voir les détails</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View>
                                <Text style={styles.textMission}>Missions planifiées</Text>
                                <FlatList
                                    scrollEnabled={false}
                                    nestedScrollEnabled={true}
                                    keyboardShouldPersistTaps="handled"
                                    data={dataMission || []}
                                    renderItem={renderItemInter}
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
                                    scrollEnabled={false}
                                    nestedScrollEnabled={true}
                                    keyboardShouldPersistTaps="handled"
                                    data={dataMissionHistory || []}
                                    renderItem={renderItemInter}
                                />
                            </View>
                        </ScrollView>
                    </View>
                );
            }
        }
        else if (typeRole === TYPEROLE.INSTITUTION) {
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
        }
        else {
            return (
                <>
                    <View style={styles.viewBottom}></View>
                    <ScrollView style={{ marginBottom: 40 }}>
                        <View style={styles.viewFooter}>
                            <Text style={styles.textFooter}>Oups ! Un problème est survenu.</Text>
                            <Image source={Config.Icon.Home.ic_home_center_error} />
                            <Text style={styles.textFooterContent}>Certaines de vos pièces justificatives ont été refusées. Veuillez les remplacer.</Text>
                        </View>
                        <View style={styles.spDoc}>
                            <Text style={styles.textSpTitle}>Pièces justificatives</Text>
                            {
                                Interpreter.suppor_doc.map((item, index) => (
                                    <TouchableOpacity key={index} onPress={() => handleClickItemVerify(item?.verify, item?.name)} style={styles.viewSpDocContainer}>
                                        <View style={styles.viewSpDocItem} key={index}>
                                            <Text style={styles.textItemName}>{item?.name}</Text>
                                            <View style={{ flexDirection: "row" }}>
                                                <Tag colorText={item?.verify ? "#079455" : "#D92D20"} colorView={item?.verify ? "rgba(7, 148, 85, 0.1)" : "rgba(217, 45, 32, 0.1)"} text={item?.verify ? "Vérifié" : "Refusé"} />
                                                {!item?.verify ? (<Image source={Config.Icon.Home.ic_next} />) : <View style={{ width: 20 }} />}
                                            </View>
                                        </View>
                                        {index < Interpreter.suppor_doc.length - 1 && (
                                            <View style={styles.divider} />
                                        )}
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </ScrollView>
                </>
            );
        }

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
            {typeRole === TYPEROLE.INTERPRETER && !verified && (
                <View style={styles.viewBtn}>
                    <Button text={'Envoyer les documents'} onPress={() => navigation.goBack()} />
                </View>
            )}
        </View>
    );
};

export default Home;
