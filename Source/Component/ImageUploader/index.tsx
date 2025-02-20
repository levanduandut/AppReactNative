import React from "react";
import {
    Image,
    ImageSourcePropType,
    StyleProp,
    TouchableOpacity,
    View,
    ViewStyle,
    FlatList,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import styles from "./styles";
import Config from "../../../Config";

interface ImageUploaderProps {
    images: string[];
    onChangeImages: (uris: string[]) => void;
    containerStyle?: StyleProp<ViewStyle>;
    uploadIcon?: ImageSourcePropType;
    closeIcon?: ImageSourcePropType;
    showAddButton?: boolean;
}

const ImageUploader = ({
    images,
    onChangeImages,
    containerStyle,
    uploadIcon,
    closeIcon,
    showAddButton
}: ImageUploaderProps) => {

    const pickImage = () => {
        if (!showAddButton) return; // Nếu đã đạt max thì không cho chọn ảnh
        launchImageLibrary({ mediaType: "photo" }, (response) => {
            if (response.didCancel || response.errorCode || !response.assets) return;
            onChangeImages([...images, response.assets[0].uri]);
        });
    };

    const removeImage = (index: number) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        onChangeImages(newImages);
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <FlatList
                data={[...images, ...(showAddButton ? ["add"] : [])]} // Ẩn nút add nếu đã đạt max
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    item === "add" ? (
                        <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
                            <Image source={uploadIcon || Config.Icon.Common.ic_plus} style={styles.iconSize} />
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.imageWrapper}>
                            <Image source={{ uri: item }} style={styles.image} />
                            <TouchableOpacity style={styles.removeButton} onPress={() => {
                                const newImages = [...images];
                                newImages.splice(index, 1);
                                onChangeImages(newImages);
                            }}>
                                <Image source={Config.Icon.Common.ic_close_square} style={styles.iconSize} />
                            </TouchableOpacity>
                        </View>
                    )
                )}
            />
        </View>
    );
};

export default ImageUploader;
