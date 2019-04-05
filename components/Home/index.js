import React, { Component } from "react";
import { AppRegistry, View, Image } from "react-native";
import { TabNavigator } from "react-navigation";
import {
  Container,
  Header,
  Drawer,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Card,
  CardItem,
  Thumbnail,
  Right,
  Button,
  Icon,
  Title,
  Text,
  Tab,
  Footer,
  FooterTab,
} from "native-base";
import Pesan from "./Pesan";
import Profile from "./Profile";
import Home from "./Home";
import Setting from "./Setting";

export default (MainScreenNavigator = TabNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile },
    Pesan: { screen: Pesan },
    Setting: { screen: Setting },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer style={{ backgroundColor: "#2AC4F3" }}>
          <FooterTab style={{ backgroundColor: "#2AC4F3" }}>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Home")}
              style={{ backgroundColor: "#2AC4F3" }}
            >
              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: "https://i.imgur.com/6H1I7Z0.png" }}
              />
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Profile")}
              style={{ backgroundColor: "#2AC4F3" }}
            >
              <Image
                style={{ height: 50, width: 50 }}
                source={require("../../assets/profile.png")}
              />
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Pesan")}
              style={{ backgroundColor: "#2AC4F3" }}
            >
              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: "https://i.imgur.com/tIRxrIF.png" }}
              />
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Setting")}
              style={{ backgroundColor: "#2AC4F3" }}
            >
              <Icon name="settings" />
              <Text>Setting</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
  }
));
