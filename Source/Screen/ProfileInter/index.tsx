import React, { useEffect, useRef, useState } from "react";
import { Alert, Animated, Easing, Image, ImageBackground, ImageSourcePropType, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import languages from "../../../Config/languages";
import { Datas, Styles } from "base-common";
import { Constants } from "base-common";
import { useNavigation, NavigationProp, useRoute, RouteProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, HeaderClose, Tag } from "base-commponent";
import Config from "../../../Config";
import { interpreter } from "base-common/Datas";
import { COLORS } from "base-common/Constants";
type RouteParams = {
    description?: string;
    language: Array<string>;
};

const ProfileInter = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
    const { description, language = [] } = route.params || {};


    return (
        <View style={styles.flexOne}>
            <ImageBackground source={Config.Icon.Info.ic_info_default} style={styles.imageInfo} >
                <SafeAreaView>
                    <TouchableOpacity style={styles.iconReturn} onPress={() => navigation.goBack()}>
                        <Image source={Config.Icon.Info.ic_return} />
                    </TouchableOpacity>
                </SafeAreaView>
            </ImageBackground>
            <ScrollView style={styles.container}>
                <View style={styles.viewBoxName}>
                    <Text style={styles.textName}>{interpreter?.name}</Text>
                    <View style={styles.viewTag}>
                        {interpreter?.language.map((item, index) => (
                            <Tag text={item} key={index} colorText={COLORS.primaryColor} colorView={'rgba(0, 0, 145, 0.1)'} />
                        ))}
                    </View>
                    <View style={styles.viewTag}>
                        <Image source={Config.Icon.Common.ic_star} />
                        <Text style={styles.textStar}>{interpreter?.vote || 5.0}</Text>
                        <Text style={styles.textDot}>·</Text>
                        <Text style={styles.textStar}>{interpreter?.location || ""}</Text>
                    </View>
                    <View style={styles.flexRow}>
                        {interpreter?.birth &&
                            (
                                <View style={styles.birthContainer}>
                                    <Text style={styles.textTitleBirth}>Date de naissance</Text>
                                    <View style={[styles.flexRow, styles.mgtop8]}>
                                        <Image source={Config.Icon.Info.ic_cake} />
                                        <Text style={styles.textBirth}>{interpreter?.birth || ""}</Text>
                                    </View>
                                </View>
                            )}
                        {interpreter?.place_birth &&
                            (
                                <View style={styles.birthContainer}>
                                    <Text style={styles.textTitleBirth}>Date de naissance</Text>
                                    <View style={[styles.flexRow, styles.mgtop8]}>
                                        <Image source={Config.Icon.Info.ic_city} />
                                        <Text style={styles.textBirth}>{interpreter?.place_birth || ""}</Text>
                                    </View>
                                </View>
                            )}
                    </View>
                    <View style={styles.viewSupport}>
                        <Text style={styles.textTitleBirth}>Pièces justificatives</Text>
                        <View style={styles.mgtop8}>
                            {interpreter?.suppor_doc?.map((item, index) => (
                                <View style={[styles.flexRow, styles.itemSp]} key={index}>
                                    <Text style={styles.textBirth}> · {item?.name}</Text>
                                    {item?.verify && <Image source={Config.Icon.Info.ic_verify} style={styles.icVerify} />}
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={styles.viewSupport}>
                        <Text style={styles.textTitleBirth}>Expériences</Text>
                        <View style={styles.mgtop8}>
                            {interpreter?.exp?.map((item, index) => (
                                <View style={[styles.flexRow]} key={index}>
                                    <Text> · </Text>
                                    <Text style={styles.textStar}>{item?.title} : {item?.description}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.viewBtn}>
                <View style={[styles.flexRow, styles.btnTop]}>
                    <Button text={'Message'} onPress={() => { }}
                        icon={Config.Icon.Common.ic_chat}
                        btnStyle={styles.btnChat}
                        textStyle={styles.textChat} />
                    <Button text={'Appel'} onPress={() => { }}
                        icon={Config.Icon.Common.ic_call}
                        btnStyle={styles.btnChat}
                        textStyle={styles.textChat} />
                </View>
                <Button text={'Demander un autre'} onPress={() => { }}
                    icon={Config.Icon.Info.ic_close}
                    btnStyle={styles.btnClose}
                    textStyle={styles.textClose} />
            </View>
        </View>
    );
};

export default ProfileInter;
