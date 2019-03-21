import React, { Component } from 'react';
import { AppRegistry, View,StyleSheet, Image } from 'react-native';
import { Container, Header, Drawer, Content, List, ListItem, Left, Separator, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';


export default class Setting extends React.Component {
  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={{fontFamily: 'Roboto'}}>Sikap</Title>
          </Body>
        </Header>
        <Content style={{ backgroundColor: 'white' }}>
        

        
        </Content>
       
      </Container>
      
    );
  }
}
