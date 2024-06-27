import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Platform,
  SafeAreaView,
  Keyboard,
} from "react-native";
import FormSeparator from "../../components/FormSeparator";
import TextLink from "../../components/TextLink";
import Button from "../../components/Button";
import { router } from "expo-router";
import brand from "../../brand/brandConfig";
import Card from "../../components/Card";
import List from "../../components/List";

export default function LoginPage() {
  return (
    <SafeAreaView
      style={styles.screen}
      onStartShouldSetResponder={() => {
        Keyboard.dismiss();
        return false;
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Card>
          <List>
            <Text style={styles.title}>Log Into {brand.name}</Text>
            <TextInput placeholder="Username" style={styles.textInput} />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              secureTextEntry
            />
            <Button title="Log In" onPress={() => router.push("/core")} />
            <TextLink
              text="Forgot password?"
              onPress={() => router.push("/recover")}
            />
            <FormSeparator text="or" />
            <Button
              title="Create New Account"
              onPress={() => router.push("/signup")}
              secondary
            />
          </List>
        </Card>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: brand.colors.background,
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  logo: {
    height: 200,
    width: 200,
    alignSelf: "center",
  },
  title: {
    fontSize: brand.fontSizes.large,
    textAlign: "center",
    color: brand.colors.text,
  },
  textInput: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
  },
});
