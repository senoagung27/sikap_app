import React, { Component } from 'react';
import { AppRegistry, View,StyleSheet, Image } from 'react-native';
import { Container, Header, Drawer, Content,H1, List, ListItem, Left, Separator, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';
import ViewMoreText from 'react-native-view-more-text';

export default class Setting extends React.Component {
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
        <Content style={{ backgroundColor: 'white' }}>
        

        
        </Content>
       
      </Container>
      
    );
  }
}
