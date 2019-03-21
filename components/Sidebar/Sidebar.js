import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';
const screens = ["Home", "Tempat", "About"];

export default class MenuSamping extends React.Component {
  render() {
    return (
      <Content style={{ backgroundColor: '#FFFFFF' }}>
        <Card style={{ flex: 2 }}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'http://tourism.sumbawakab.go.id/assets/media/photo/wisatakita.jpg' }} style={{ marginLeft: 20, marginBottom: 10 }} />
              <Body>
                <Text style={{ margin: 10, marginBottom: 20 }}>Pariwisata Online</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <List>
          <ListItem avatar
            button
            onPress={() => this.props.navigation.navigate(screens[0])}
          >
            <Left>
              <Thumbnail source={{ uri: 'https://png.icons8.com/color/2x/cottage.png' }} />
            </Left>
            <Body>
              <Text>Home</Text>
              <Text note></Text>
            </Body>
          </ListItem>
        </List>
        <List>
          <ListItem avatar
            button
            onPress={() => this.props.navigation.navigate(screens[1])}
          >
            <Left>
              <Thumbnail source={{ uri: 'https://png.icons8.com/color/540/big-ben.png' }} />
            </Left>
            <Body>
              <Text>Place</Text>
              <Text note></Text>
            </Body>
          </ListItem>
        </List>
        <List>
          <ListItem avatar
            button
            onPress={() => this.props.navigation.navigate(screens[2])}
          >
            <Left>
              <Thumbnail source={{ uri: 'https://png.icons8.com/color/540/about.png' }} />
            </Left>
            <Body>
              <Text>About</Text>
              <Text note></Text>
            </Body>
          </ListItem>
        </List>
      </Content>

    );
  }
}
