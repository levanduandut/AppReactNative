import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Alert, Animated, Dimensions, Easing, Image, Modal, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import languages from "../../../Config/languages";
import { Constants } from "base-common";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { Button, HeaderClose } from "base-commponent";
import Config from "../../../Config";
import MapView from "react-native-maps";
import BottomSheet, { BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
const width = Dimensions.get('window').width
type RouteParams = {
    description?: string;
    language: Array<string>;
};

const OnGoing = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
    const { description, language = [] } = route.params || {};
    const [modalVisible, setModalVisible] = useState(false);
    const [loadingSuccess, setLoadingSuccess] = useState<boolean>(false);
    const progressAnim = useRef(new Animated.Value(0)).current;
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['50%', '75%'], []);
    const progress = useRef(new Animated.Value(0)).current;
    const [estimatedTime, setEstimatedTime] = useState(26);


    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

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
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: false,
            }).start(() => {
                if (modalVisible) {
                    setModalVisible(false);
                    setLoadingSuccess(true);
                }
            });
        }
    }, [modalVisible]);


    useEffect(() => {
        if (loadingSuccess) {
            Animated.timing(progress, {
                toValue: 1,
                duration: 10000,
                useNativeDriver: false,
            }).start(() => {
                navigation.navigate(Constants.Screen.ProfileInter);
            });
        }
    }, [loadingSuccess]);

    const translateX = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, width - 90],
    });

    const handleClickCancel = () => {
        navigation.goBack();
    }

    const handleClickDone = () => {
        navigation.goBack();
    }

    const handleClickStartChat = () => {
        setModalVisible(false);
    }

    const handleClickDetail = () => {
        navigation.navigate(Constants.Screen.ProfileInter);
    }
    const handleViewProgress = useCallback(() => {
        return (
            <View style={styles.progressContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.titleSec}>Arrivée estimée</Text>
                    <Text style={styles.textMinute}>{estimatedTime} mins</Text>
                </View>
                <View style={styles.lineProgressNone}>
                    <Animated.View style={[styles.lineProgress, { width: translateX }]} />
                    <Animated.View style={{
                        ...styles.iconProgress,
                        transform: [{ translateX }]
                    }}>
                        <Image source={Config.Icon.Info.ic_progress} />
                    </Animated.View>
                </View>
            </View>
        )
    }, [loadingSuccess]);

    return (
        <View style={styles.container}>
            <MapView style={{ flex: 1 }}>
            </MapView>
            <View style={styles.viewHeaderClose}>
                <HeaderClose text={loadingSuccess ? "En cours" : languages.get("find.inter.search")} />
            </View>
            <BottomSheet
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                snapPoints={snapPoints}
                handleComponent={() => {
                    if (loadingSuccess) {
                        return (
                            <View>
                                {handleViewProgress()}
                            </View>
                        )
                    }
                    else {
                        return null
                    }
                }}
            >
                <BottomSheetView style={{
                    flex: 1,
                    paddingHorizontal: 20,
                }}>
                    <BottomSheetScrollView style={styles.containerContent}>
                        <View style={styles.viewTitle}>
                            <Text style={styles.title}>Interprétariat distanciel</Text>
                            <Text style={styles.title}>Français - {language.join(", ")} </Text>
                        </View>
                        {loadingSuccess && (
                            <View>
                                <Text style={styles.titleSec}>Interprète</Text>
                                <View style={styles.viewInter}>
                                    <View style={styles.viewAvatar}>
                                        <Image source={Config.Icon.Home.ic_avatar_default} style={styles.avatarInter} />
                                        <View style={styles.viewName}>
                                            <Text style={styles.modalTextName}>Ananya Sharma</Text>
                                            <View style={styles.flexRow}>
                                                <Image source={Config.Icon.Common.ic_note} />
                                                <Text style={styles.textInfo}>Envoyer un message</Text>
                                            </View>
                                            <View style={[styles.flexRow, styles.mgTop9]}>
                                                <Image source={Config.Icon.Common.ic_call} />
                                                <Text style={styles.textInfo}>Appeler</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <TouchableOpacity onPress={handleClickDetail}>
                                        <Image source={Config.Icon.Common.ic_next_detail} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        <Text style={styles.titleSec}>Adresse de la mission</Text>
                        <View style={styles.viewTitleSec}>
                            <Image source={Config.Icon.FindInter.ic_pin} style={styles.image} />
                            <Text style={styles.textAddress}>À distance</Text>
                        </View>
                        <View>
                            <Text style={styles.titleSec}>{languages.get("find.inter.description")}</Text>
                            <Text style={styles.textDescription}>{description || "Aucune description disponible"}</Text>
                        </View>

                    </BottomSheetScrollView>
                </BottomSheetView>
            </BottomSheet>
            {loadingSuccess ? (
                <View style={styles.viewBtn}>
                    <Button text={'Marquer comme terminé'} btnStyle={styles.btnDone} textStyle={styles.textDone} onPress={handleClickDone} />
                    <Button text={'Annuler la mission'} btnStyle={styles.btnCancel} textStyle={styles.textCancel} onPress={handleClickCancel} />
                </View>
            ) : (
                <View style={styles.viewBtn}>
                    <Button text={languages.get("find.inter.search")} btnStyle={styles.btnCancel} textStyle={styles.textCancel} onPress={handleClickCancel} />
                </View>
            )
            }

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
        </View>
    );
};

export default OnGoing;
