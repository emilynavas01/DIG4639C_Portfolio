// This is the Header component that displays the app logo and navigation links
import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4511e",
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default Header;