import React, { Component } from 'react';
import { AppRegistry, View, Image, RefreshControl, ListView } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Container, Header, Drawer, Content, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';

export default class Home extends React.Component {

  render() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var tanggal = date + '-' + month + '-' + year;

    return (

      <Container style={{ backgroundColor: '#ffdab9' }}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Pariwisata online</Title>
          </Body>
        </Header>
        <Content style={{ backgroundColor: '#ffdab9' }}>
          <List>
            <Card style={{ flex: 0 }}>
              <CardItem style={{ backgroundColor: '#ffdab9' }}>
                <Left>
                  <Thumbnail source={{ uri: 'http://tourism.sumbawakab.go.id/assets/media/photo/wisatakita.jpg' }} />
                  <Body>
                    <Text>Pariwisata Malang Online</Text>
                    <Text note>{tanggal}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem style={{ backgroundColor: '#ffdab9' }}>
                <Body>
                  <Image source={{ uri: 'https://3.bp.blogspot.com/-jzwDgtK6Sno/V9QbjrtDx_I/AAAAAAAAJ3I/XtZWM51h26oAYYWzFPs3Vpu9_Y85hga3gCLcB/s1600/IMG00624-20150704-1356.jpg' }} style={{ height: 200, width: 400, flex: 1, padding: 30 }} />
                  <Text>
                    Selamat datang di Pariwisata Malang online
                      Powered By Sistem Informasi ITATS
                </Text>
                </Body>
              </CardItem>
              <CardItem style={{ backgroundColor: '#ffdab9' }}>
                <Left>
                  <Button transparent textStyle={{ color: '#87838B' }}>
                    <Icon name="logo-github" />
                    <Text>2017</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          </List>
        </Content>
      </Container>
    );
  }

}
