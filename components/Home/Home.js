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
export default class Home extends React.Component {
  render() {
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
        
        <Content>
        <List>
          <Card style={{ height: 100 }}>
            <CardItem style={{ backgroundColor: "#4dd0e1" }}>
              <Body>
                <H1 style={{ left: 90 }}>Putra Wahyu</H1>
                <Text style={{ left: 100 }}>Kelas XII A (IPA)</Text>
                <Text style={{ left: 100 }}>Pompes Anwar Sholihin</Text>
                <Image
                  source={{ uri: "https://i.imgur.com/zBwTWJo.png" }}
                  style={{ height: 50, width: 50, bottom: 50, left: 30 }}
                />
               
                
              </Body>
            </CardItem>
          </Card>
        </List>
        
                  <List>
            <Card style={{ flex: 0 }}>
              <CardItem style={{ backgroundColor: "#cfeef9",height:700 }}>
                <Body>
                  <CardItem
                    style={{
                      backgroundColor: "white",
                      height: 250,
                      width:190,
                      right:10,
                    }}
                  >
                    <Body>
                      <Image
                        style={{ width: 50, height: 50, left: 35 }}
                        source={{ uri: "https://i.imgur.com/rofgmYg.png" }}
                      />
                      <Text style={{ top: 10, left: 10 }}>Kesehatan</Text>
                      <Text style={{ top: 20, left: 40 }}>Baik</Text>
                     
                    </Body>
                    
                  </CardItem>
                  <CardItem
                    style={{
                      backgroundColor: "white",
                      height: 250,
                      width:195,
                      left:190,
                      bottom:250,
                      marginRight: 220,
                    }}
                  >
                    <Body>
                      <Image
                        style={{ width: 50, height: 50, left: 35 }}
                        source={{ uri: "https://i.imgur.com/rofgmYg.png" }}
                      />
                      <Text style={{ top: 10, left: 10 }}>Perilaku</Text>
                      <Text style={{ top: 20, left: 40 }}>Baik</Text>
                    </Body>
                  </CardItem>
                  <CardItem
                    style={{
                      backgroundColor: "white",
                      height: 250,
                      width:190,
                      right:10,
                      bottom:240,
                      marginRight: 220,
                      marginBottom:-250,
                    }}
                  >
                    <Body>
                      <Image
                        style={{ width: 50, height: 50, left: 35 }}
                        source={{ uri: "https://i.imgur.com/rofgmYg.png" }}
                      />
                      <Text style={{ top: 10, left: 10 }}>Sekolah</Text>
                      <Text style={{ top: 20, left: 40 }}>Baik</Text>
                    </Body>
                  </CardItem>
                  <CardItem
                    style={{
                      backgroundColor: "white",
                      height: 250,
                      width:195,
                      left:190,
                      bottom:240,
                      marginRight: 220,
                    }}
                  >
                    <Body>
                      <Image
                        style={{ width: 50, height: 50, left: 35 }}
                        source={{ uri: "https://i.imgur.com/rofgmYg.png" }}
                      />
                      <Text style={{ top: 10, left: 10 }}>Kebutuhan</Text>
                      <Text style={{ top: 20, left: 40 }}>Baik</Text>
                    </Body>
                  </CardItem>
                  <CardItem
                    style={{
                      backgroundColor: "white",
                      height: 160,
                      width:395,
                      right:10,
                      bottom:230,
                      marginRight: 220,
                    }}
                  >
                    <Body>
                      <Image
                        style={{ width: 50, height: 50, left: 35 }}
                        source={{ uri: "https://i.imgur.com/rofgmYg.png" }}
                      />
                      <Text style={{ top: 10, left: 10 }}>Ngaji</Text>
                      <Text style={{ top: 20, left: 40 }}>Baik</Text>
                    </Body>
                  </CardItem>

                </Body>
              </CardItem>
              </Card>
          </List>
        
            
         </Content>
      </Container>
    );
  }
}
