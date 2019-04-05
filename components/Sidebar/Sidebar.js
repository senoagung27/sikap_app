import React, { Component } from "react";
import { AppRegistry, View, Image } from "react-native";
import {
  Container,
  Header,
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
const screens = ["Login", "Home", "Aturakun", "Bantuan", "Tentangkami"];

export default class MenuSamping extends React.Component {
  render() {
    return (
      <Content style={{ backgroundColor: "#FFFFFF" }}>
        <Card style={{ flex: 2, height: 200 }}>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://www.pngarts.com/files/3/Avatar-Transparent-Image.png",
                }}
                style={{ marginLeft: 100, marginBottom: 5 }}
              />
              <Text style={{ marginTop: 100, right: 90 }}>Pak Ngateman</Text>
              <Body />
            </Left>
          </CardItem>
          <Button
            transparent
            style={{ left: 20 }}
            dark
            onPress={() => this.props.navigation.navigate(screens[0])}
          >
            <Text>Yayasan Pendidikan indonesia</Text>
          </Button>
        </Card>
        <List>
          <ListItem
            avatar
            button
            onPress={() => this.props.navigation.navigate(screens[1])}
          >
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://cdn3.iconfinder.com/data/icons/basicolor-essentials/24/001_home-512.png",
                }}
              />
            </Left>
            <Body>
              <Text>Home</Text>
            </Body>
          </ListItem>
        </List>
        <List>
          <ListItem
            avatar
            button
            onPress={() => this.props.navigation.navigate(screens[2])}
          >
            <Left>
              <Thumbnail source={{ uri: "https://i.imgur.com/4Do1Dyt.png" }} />
            </Left>
            <Body>
              <Text>Atur Akun</Text>
            </Body>
          </ListItem>
        </List>
        <List>
          <ListItem
            avatar
            button
            onPress={() => this.props.navigation.navigate(screens[3])}
          >
            <Left>
              <Thumbnail source={{ uri: "https://i.imgur.com/UnwTeps.png" }} />
            </Left>
            <Body>
              <Text>Bantuan</Text>
            </Body>
          </ListItem>
        </List>

        <List>
          <ListItem
            avatar
            button
            onPress={() => this.props.navigation.navigate(screens[4])}
          >
            <Left>
              <Thumbnail source={{ uri: "https://i.imgur.com/qrzZ1gg.png" }} />
            </Left>
            <Body>
              <Text>Tentang Kami</Text>
            </Body>
          </ListItem>
        </List>
      </Content>
    );
  }
}
