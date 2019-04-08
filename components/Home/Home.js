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
  Accordion,
  Drawer,
  H1,
  Content,
  List,
  ListItem,
  DeckSwiper,
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
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
];
export default class Home extends React.Component {
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
        <List>
          <Card style={{ height: 100 }}>
            <CardItem style={{ backgroundColor: "#4dd0e1" }}>
              <Body>
                <H1 style={{ left: 90 }}>Putra Wahyu</H1>
                <Text style={{ left: 100 }}>Kelas XII A (IPA)</Text>
                <Image
                  source={{ uri: "https://i.imgur.com/zBwTWJo.png" }}
                  style={{ height: 50, width: 50, bottom: 50, left: 30 }}
                />
              </Body>
            </CardItem>
          </Card>
        </List>
        
        <Content>
          
        <Card style={{ height: 250, width:200 }}>
            <CardItem style={{ backgroundColor: 'white' }}>
              <Body>
              </Body>
            </CardItem>
          </Card>
          <Card style={{ height: 250, width:200, bottom: 100, left: 150 }}>
            <CardItem style={{ backgroundColor: 'white' }}>
              <Body>
              </Body>
            </CardItem>
          </Card>
        <Card>
            <CardItem>
              
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}
