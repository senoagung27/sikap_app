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
import Bayar from "./Bayar";
import Nilai from "./Nilai";

export default (MainScreenNavigator = TabNavigator(
  {
    Home: { screen: Home },
    Pesan: { screen: Pesan },
    Bayar: { screen: Bayar },
    Kehadiran: { screen: Kehadiran },
    Nilai: { screen: Nilai },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer style={{ backgroundColor: "#2AC4F3" ,height:70 }}>
          <FooterTab style={{ backgroundColor: "#2AC4F3" }}>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Home")}
              style={{ backgroundColor: "#2AC4F3" }}
            >
              <Image
                style={{ width: 35, height: 35 }}
                source={{ uri: "https://i.imgur.com/MmArfaC.png" }}
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
                source={{ uri: "https://i.imgur.com/1Ic1cDn.png" }}
              />
              <Text>Pesan</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Bayar")}
              style={{ backgroundColor: "#2AC4F3" }}
            >
              <Image
                style={{ width: 35, height: 35 }}
                source={{ uri: "https://i.imgur.com/v7DOAMj.png" }}
              />
              <Text>Bayar</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Kehadiran")}
              style={{ backgroundColor: "#2AC4F3" }}
            >
              <Image
                style={{ height: 35, width: 35 }}
                source={{ uri: "https://i.imgur.com/1Ic1cDn.png" }}
              />
              <Text>Kehadiran</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 4}
              onPress={() => props.navigation.navigate("Nilai")}
              style={{ backgroundColor: "#2AC4F3" }}
            >
              <Image
                style={{ width: 35, height: 35 }}
                source={{ uri: "https://i.imgur.com/v7DOAMj.png" }}
              />
              <Text>Nilai</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
  }
));
