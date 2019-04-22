import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Image,
  RefreshControl,
  ListView,
} from "react-native";
import { TabNavigator } from "react-navigation";
import {
  Container,
  Header,
  Drawer,
  Content,
  List,
  ListItem,
  H1,
  Row,
  Left,
  Body,
  Card,
  CardItem,
  Grid,
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

export default class Profile extends React.Component {
  render() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var tanggal = date + "-" + month + "-" + year;

    return (
      <Container style={{ backgroundColor: "white" }}>
        <Header style={{ backgroundColor: "#2AC4F3" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon style={{ color: "white" }} name="menu" />
            </Button>
          </Left>
          <Body>
            <H1 style={{ color: "white" }}>SIKAP</H1>
          </Body>
        </Header>
        <Content style={{ backgroundColor: "white" }}>

          
        </Content>
      </Container>
    );
  }
}
