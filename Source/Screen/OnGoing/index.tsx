import React, { useEffect, useRef, useState } from "react";
import { Alert, Animated, Easing, Image, ImageSourcePropType, Modal, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import languages from "../../../Config/languages";
import { Datas } from "base-common";
import { Constants } from "base-common";
import { useNavigation, NavigationProp, useRoute, RouteProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, HeaderClose } from "base-commponent";
import Config from "../../../Config";
type RouteParams = {
    description?: string;
    language: Array<string>;
};

const OnGoing = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
    const { description, language = [] } = route.params || {};
    const [modalVisible, setModalVisible] = useState(false);
    const progressAnim = useRef(new Animated.Value(0)).current;




    useEffect(() => {

        //Fake running
        const timeout = setTimeout(() => {
            setModalVisible(true);
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (modalVisible) {
            progressAnim.setValue(0);
            Animated.timing(progressAnim, {
                toValue: 1,
                duration: 5000,
                easing: Easing.linear,
                useNativeDriver: false,
            }).start();
        }
    }, [modalVisible]);



    const handleClickCancel = () => {
        navigation.goBack();
    }

    const handleClickStartChat = () => {
        // navigation.navigate(Constants.Screen.Chat);
        setModalVisible(false);
    }


    return (
        <SafeAreaView style={styles.container}>
            <HeaderClose text={languages.get("find.inter.search")} />
            <View style={styles.containerContent}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Interprétariat distanciel</Text>
                    <Text style={styles.title}>Français - {language.join(", ")} </Text>
                </View>
                <Text style={styles.titleSec}>Adresse de la mission</Text>
                <View style={styles.viewTitleSec}>
                    <Image source={Config.Icon.FindInter.ic_pin} style={styles.image} />
                    <Text style={styles.textAddress}>À distance</Text>
                </View>
                <View>
                    <Text style={styles.titleSec}>{languages.get("find.inter.description")}</Text>
                    <Text style={styles.textDescription}>{description || "Aucune description disponible"}</Text>
                </View>
            </View>
            <View style={styles.viewBtn}>
                <Button text={languages.get("find.inter.search")} btnStyle={styles.btnCancel} textStyle={styles.textCancel} onPress={handleClickCancel} />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalViewParent}>
                    <View style={styles.modalView}>
                        <View style={styles.progressBarContainer}>
                            <Animated.View
                                style={[
                                    styles.progressBar,
                                    {
                                        width: progressAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ["0%", "100%"],
                                        }),
                                    },
                                ]}
                            />
                        </View>
                        <View style={styles.mainModalContent}>
                            <Text style={styles.modalText}>Nous avons trouvé quelqu'un !</Text>
                            <Image source={Config.Icon.Home.ic_avatar_default} style={styles.imageAvatar} />
                            <Text style={styles.modalTextName}>Ananya Sharma</Text>
                            <View style={styles.viewStar}>
                                <Image source={Config.Icon.Common.ic_star} />
                                <Text style={styles.textStar}>5.0</Text>
                            </View>
                            <View style={{ width: '100%' }}>
                                <Button
                                    text={'Démarrer une conversation'}
                                    btnStyle={styles.btnCancel}
                                    textStyle={styles.textCancel}
                                    onPress={handleClickStartChat}
                                    icon={Config.Icon.Common.ic_chat}
                                />
                                <Button
                                    text={'Appeler'}
                                    btnStyle={styles.btnCall}
                                    textStyle={styles.textCancel}
                                    onPress={handleClickStartChat}
                                    icon={Config.Icon.Common.ic_call}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default OnGoing;
