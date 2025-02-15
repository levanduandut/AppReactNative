import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Image, ImageSourcePropType, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import languages from "../../../Config/languages";
import { Datas } from "base-common";
import { Constants } from "base-common";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Config from "../../../Config";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Header, RadioBox } from "base-commponent";
import { COLORS, TYPE_LOCATION, TYPEROLE } from "base-common/Constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

const FindInter = () => {
    const navigation = useNavigation<any>();
    const [languageChoose, setLanguageChoose] = useState<string[]>([]);
    const [selectedOption, setSelectedOption] = useState<string>("Présentiel");

    const Languages = [
        { name: "Anglais" },
        { name: "Hindi" },
        { name: "Espagnol" },
        { name: "Chinois" },
        { name: "Allemand" },
        { name: "Français" },
        { name: "Japonais" },
        { name: "Arabe" },
        { name: "Bengali" },
        { name: "Portugais" },
        { name: "Ourdou" },
        { name: "+ Plus", plus: true }
    ];


    return (
        <SafeAreaView style={styles.safeView}>
            <Header
                text={languages.get("find.inter.title")}
            />
            <View style={styles.container}>
                <KeyboardAwareScrollView
                    bounces={false}
                    scrollEnabled={false}
                    keyboardShouldPersistTaps="handled"
                    enableOnAndroid={true}
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    enableAutomaticScroll={true}
                    extraScrollHeight={Platform.OS === "android" ? 100 : 60}
                >
                    <Text style={styles.textContent}>{languages.get("find.inter.content")}</Text>
                    <Text style={styles.textTitleLang}>{languages.get("find.inter.language")}</Text>
                    <View>
                        <FlatList
                            data={Languages}
                            numColumns={4} // Số cột hiển thị
                            keyExtractor={(item) => item.name}
                            style={styles.listLanguage}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[
                                        styles.itemLanguage,
                                        languageChoose.includes(item.name) && styles.selectedButton,
                                        item.plus && styles.plusButton
                                    ]}
                                    onPress={() => {
                                        if (!item.plus) {
                                            setLanguageChoose(prev =>
                                                prev.includes(item.name)
                                                    ? prev.filter(lang => lang !== item.name) 
                                                    : [...prev, item.name]
                                            );
                                        }
                                    }}
                                >
                                    <Text style={[
                                        styles.textLanguage,
                                        languageChoose.includes(item.name) && styles.selectedText,
                                        item.plus && styles.plusText
                                    ]}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>

                            )}
                        />
                    </View>
                    <Text style={styles.textTitleLang}>{languages.get("find.inter.location")}</Text>
                    <View style={styles.viewRadio}>
                        <RadioBox isCheked={selectedOption === TYPE_LOCATION.Distanciel} onPress={() => setSelectedOption(TYPE_LOCATION.Distanciel)} />
                        <Text style={styles.textRadio}>Distanciel</Text>
                        <RadioBox isCheked={selectedOption === TYPE_LOCATION.Présentiel} onPress={() => setSelectedOption(TYPE_LOCATION.Présentiel)} />
                        <Text style={styles.textRadio}>Présentiel</Text>
                    </View>
                    {selectedOption === TYPE_LOCATION.Présentiel && (
                        <TouchableOpacity
                            style={styles.buttonLocation}
                        >
                            <Image source={Config.Icon.FindInter.ic_pin} />
                            <Text style={styles.textLocation}>{'1 rue Gabriel Vicaire, 75002 Paris'}</Text>
                        </TouchableOpacity>
                    )}
                    <Text style={styles.textTitleLang}>{languages.get("find.inter.description")}</Text>
                    <View>
                        <TextInput
                            multiline
                            numberOfLines={6}
                            style={styles.textInputDes}
                            placeholder={languages.get("find.inter.description.placeholder")}
                            placeholderTextColor={Config.Color.Common.placeholder_color}
                        />
                        <Image style={{ position: 'absolute', top: 28, left: 12 }} source={Config.Icon.FindInter.ic_note} />
                    </View>
                </KeyboardAwareScrollView>
                <View style={styles.viewBtn}>
                    <Button text={languages.get("find.inter.search")} onPress={() => { }} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default FindInter;
