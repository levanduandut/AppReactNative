import React, { useState } from "react";
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import languages from "../../../Config/languages";
import { Datas } from "base-common";
import { Constants } from "base-common";
import { useNavigation, NavigationProp, useRoute, RouteProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Header, ImageUploader } from "base-commponent";
type SupportingRouteParams = {
    name: string;
};

const MAX_IMAGES = 3;

const Supporting = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<RouteProp<{ params: SupportingRouteParams }, 'params'>>();
    const name: string = route?.params?.name ?? "";
    const [images, setImages] = useState<string[]>([]);

    const canAddMore = images.length < MAX_IMAGES;

    return (
        <SafeAreaView style={styles.container}>
            <Header text={'Pièces justificatives'} />
            <View style={styles.mainContainer}>
                <Text style={styles.textContent}>Importez les documents ci-dessous, puis soumettez-les à nouveau.</Text>
                <Text style={styles.textSpTitle}>{name}</Text>
                <Text style={[styles.textContent, styles.mgBtn8]}>{'< 3 mois'}</Text>
                <ImageUploader images={images} onChangeImages={setImages}  showAddButton={canAddMore} />
            </View>
            <View style={styles.viewBtn}>
                <Button text={'Envoyer'} onPress={() => navigation.goBack()} />
            </View>
        </SafeAreaView>
    );
};

export default Supporting;
