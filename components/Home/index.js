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
import Kehadiran from "./Kehadiran";
import Pesan from "./Pesan";
import Home from "./Home";
import Nilai from "./Nilai";

export default (MainScreenNavigator = TabNavigator(
  {
    Home: { screen: Home },
    Pesan: { screen: Pesan },
    Kehadiran: { screen: Kehadiran },
    Nilai: { screen: Nilai },
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
                style={{ width: 35, height: 35 }}
                source={{ uri: "https://i.imgur.com/6H1I7Z0.png" }}
              />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Pesan")}
              style={{ backgroundColor: "#2AC4F3" }}
            >
              <Image
                style={{ height: 35, width: 35 }}
                source={{ uri: "https://i.imgur.com/tIRxrIF.png" }}
              />
              <Text>Pesan</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Kehadiran")}
              style={{ backgroundColor: "#2AC4F3" }}
            >
              <Image
                style={{ width: 35, height: 35 }}
                source={{ uri: "https://i.imgur.com/cam3znM.png" }}
              />
              <Text>Kehadiran</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Nilai")}
              style={{ backgroundColor: "#2AC4F3" }}
            >
              <Image
                style={{ width: 35, height: 35 }}
                source={{ uri: "https://i.imgur.com/2jsLpTT.png" }}
              />
              <Text>Nilai</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
  }
));
