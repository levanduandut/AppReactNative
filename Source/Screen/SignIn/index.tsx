import React, { useEffect, useState } from "react"
import { Alert, Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import Constants, { TYPEROLE } from "base-common/Constants"
import languages from "../../../Config/languages"
import { Button, CheckBox, InputBox } from "base-commponent"
import Config from "../../../Config"
import { Global, Utils } from "base-common"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"

const SignIn = ({ route }: { route: any }) => {
  const type = route?.params?.type || TYPEROLE.INSTITUTION
  const navigation = useNavigation<any>();
  const [isCheked, setIsChecked] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const SocialLoginButtons = () => {
    return (
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={Config.Icon.SignIn.ic_signin_google}
            style={styles.iconBtn}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={Config.Icon.SignIn.ic_signin_apple}
            style={styles.iconBtn}
          />
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {

  }, [])

  const onClickLogin = (type: string) => {
    if (!Utils.checkEmail(email)) {
      setErrEmail(languages.get("signin.email.error"));
      return
    }
    if (!password) {
      setErrPassword(languages.get("signin.password.please"));
      return
    }

    const institutionAccount = Constants.Account.INSTITUTION;
    const interpreterAccount = Constants.Account.INTERPRETER;

    if (type === TYPEROLE.INSTITUTION) {
      if (
        email.toLowerCase().trim() === institutionAccount.email &&
        password === institutionAccount.password
      ) {
        Global.isLogin = true;
        navigation.navigate(Constants.Screen.Home, {});
      } else {
        setErrPassword(languages.get("signin.password.error"));
      }
    } else if (type === TYPEROLE.INTERPRETER) {
      if (
        email.toLowerCase().trim() === interpreterAccount.email &&
        password === interpreterAccount.password
      ) {
        Global.isLogin = true;
        navigation.navigate(Constants.Screen.Home, {});
      } else {
        setErrPassword(languages.get("signin.password.error"));
      }
    }
  }

  const onChangeEmail = (text: string) => {
    setEmail(text);
    setErrEmail("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleApp}>{languages.get("role.title.top")}</Text>
      <View style={styles.titleStyle}>
        <Text style={styles.titleLogin}>{languages.get("signin.title.top")}</Text>
        <Text style={styles.textWelcome}>{languages.get("signin.welcome")}</Text>
      </View>
      <View>
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
      </View>
      <View style={styles.rememberContainer}>
        <View style={styles.rememberBox}>
          <CheckBox isCheked={isCheked} onPress={() => setIsChecked(!isCheked)} />
          <Text>{languages.get("signin.remember")}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.textForgot}>{languages.get("signin.forgot")}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewOr}>
        <View style={styles.line}></View>
        <Text style={styles.textOr}>{languages.get("signin.or")}</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.viewSocial}>
        <SocialLoginButtons />
      </View>
      <View style={styles.viewBtn}>
        <Button text={languages.get("signin.login")} onPress={() => onClickLogin(type)} />
        <Text style={styles.textRegister}>{languages.get("signin.register")}</Text>
      </View>
    </SafeAreaView>
  );
}

export default SignIn
