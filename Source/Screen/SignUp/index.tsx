import React, { useEffect, useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import Constants, { TYPEROLE } from "base-common/Constants"
import languages from "../../../Config/languages"
import { Button, CheckBox, Header, ImageUploader, InputBox } from "base-commponent"
import Config from "../../../Config"
import { Global, Utils } from "base-common"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"

const SignUp = ({ route }: { route: any }) => {
  const type = route?.params?.type || TYPEROLE.INSTITUTION
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errEmail, setErrEmail] = useState<string>("");
  const [errPassword, setErrPassword] = useState<string>("");
  const [errRequired, setErrRequired] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [establishment, setEstablishment] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [errImages, setErrImages] = useState<boolean>(false);
  const [errorFields, setErrorFields] = useState<Record<string, boolean>>({});

  const validateFields = () => {
    const errors: Record<string, boolean> = {
      firstName: firstName.trim() === "",
      lastName: lastName.trim() === "",
      phone: phone.trim() === "",
      address: address.trim() === "",
      establishment: establishment.trim() === "",
    };

    setErrorFields(errors);
    setErrImages(images.length === 0); 

    const hasError = Object.values(errors).includes(true);
    setErrRequired(hasError);

    return !hasError;
  };

  useEffect(() => {

  }, [])

  const onClickSingnUp = (type: string) => {
    if (!Utils.checkEmail(email)) {
      setErrEmail(languages.get("signin.email.error"));
      return
    }
    if (!password) {
      setErrPassword(languages.get("signin.password.please"));
      return
    }
    if (!validateFields()) return;

    if (firstName === '' || lastName === '' || phone === '' || address === '' || establishment === '') {
      return
    }

    const institutionAccount = Constants.Account.INSTITUTION;
    const interpreterAccount = Constants.Account.INTERPRETER;

    if (type === TYPEROLE.INSTITUTION) {
      navigation.navigate(Constants.Screen.Home, { type: TYPEROLE.INSTITUTION });
    } else if (type === TYPEROLE.INTERPRETER) {
      Global.isLogin = true;
      navigation.navigate(Constants.Screen.Home, { type: TYPEROLE.INTERPRETER });
    }
  }

  const onChangeEmail = (text: string) => {
    setEmail(text);
    setErrEmail("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header text={'Créez votre compte'} />
      <Text style={styles.textWelcome}>Merci de renseigner les informations ci-dessous</Text>
      <View>
        <View style={styles.inputNameContainer}>
          <View style={styles.inputName}>
            <InputBox
              value={firstName}
              onChangeText={setFirstName}
              containerStyle={errorFields.firstName ? styles.errorBorder : {}}
              iconLeft={Config.Icon.SignIn.ic_signin_email} text={'Prénom'} />
          </View>
          <View style={styles.inputName}>
            <InputBox
              value={lastName}
              containerStyle={errorFields.lastName ? styles.errorBorder : {}}
              onChangeText={setLastName}
              text={'Nom'} />
          </View>
        </View>
        <InputBox
          value={email}
          onChangeText={onChangeEmail}
          iconLeft={Config.Icon.SignIn.ic_signin_email} text={languages.get("signin.email")} />
        {errEmail && (
          <Text style={styles.textError}>{errEmail}</Text>
        )}
        <InputBox
          value={password}
          onChangeText={setPassword}
          containerStyle={styles.inputBoxPass}
          iconLeft={Config.Icon.SignIn.ic_signin_password}
          text={languages.get("signin.password")}
          secureTextEntry={!showPassword}
          iconRight={Config.Icon.SignIn.ic_signin_eye}
          onPressIconRight={() => setShowPassword(!showPassword)} />
        {errPassword && (
          <Text style={styles.textError}>{errPassword}</Text>
        )}
        <InputBox
          value={phone}
          onChangeText={setPhone}
          containerStyle={[styles.mgBottom, errorFields.phone ? styles.errorBorder : {}]}
          iconLeft={Config.Icon.Common.ic_call} text={'Numéro de téléphone'} />
        <InputBox
          value={address}
          onChangeText={setAddress}
          containerStyle={[styles.mgBottom, errorFields.address ? styles.errorBorder : {}]}
          iconLeft={Config.Icon.FindInter.ic_pin} text={'Numéro de téléphone'} />
        <InputBox
          value={establishment}
          containerStyle={[styles.mgBottom, errorFields.establishment ? styles.errorBorder : {}]}
          onChangeText={setEstablishment}
          iconRight={Config.Icon.Common.ic_down}
          iconLeft={Config.Icon.SignUp.ic_bulding} text={'Type d’établissement'} />
        {errRequired && (
          <Text style={styles.textError}>Veuillez saisir toutes les informations requises.</Text>
        )}
      </View>
      <View style={styles.viewDoc}>
        <Text style={styles.textTitleDoc}>Documents de vérification</Text>
        <Text style={styles.textWelcome}>Veuillez fournir un en-tête avec la signature et le cachet de votre institution pour vérification. Votre compte sera validé avant que vous puissiez utiliser notre service.</Text>
        <ImageUploader images={images} onChangeImages={setImages} />
      </View>
      <View style={styles.viewBtn}>
        <Button text={languages.get("signin.login")} onPress={() => onClickSingnUp(type)} />
      </View>
      {errImages && <Text style={styles.textError}>Veuillez télécharger au moins une image.</Text>}
    </SafeAreaView>
  );
}

export default SignUp
