import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Container, Header, Drawer, Content, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';
import Tempat from './Tempat';
import Add from './Add';
import Home from './Home';
import About from "../Sidebar/About.js";

export default (MainScreenNavigator = TabNavigator(
  {
    Home: { screen: Home},
    Add: { screen: Add},
    Tempat: { screen: Tempat },
    About: { screen: About },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
        <FooterTab>
          <Button vertical active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Home")}
              >
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
          <Button vertical active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Add")}>
            <Icon active name="paper" />
            <Text>Input</Text>
          </Button>
          <Button vertical active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Tempat")}>
            <Icon name="navigate" />
            <Text>Place</Text>
          </Button>
        </FooterTab>
      </Footer>
     );
    }
  }
));