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
        <List>
          <Card>
            <CardItem style={{ backgroundColor: "white" }}>
              <Body>
                <H1>Nilai Siswa</H1>
                <Text note>Kelas XII(semster ganjil) </Text>
              </Body>
            </CardItem>
          </Card>
        </List>

        <List>
             <Card style={{ 
                backgroundColor: "#e1f5fe",
                height:250,
                marginRight:210
                }}>
                <Body>
                <Image
                        style={{ width: 50, height: 50, left: 35 }}
                        source={{ uri: "https://i.imgur.com/rofgmYg.png" }}
                      />
                      <Text style={{ top: 10, left: 10 }}>BERKEMBANG</Text>
                      <Text style={{ top: 20, left: 40 }}>MATEMATIKA</Text>
                
                </Body>
              </Card>
                </List>

          <List>
              <Card style={{ 
                backgroundColor: "#e1f5fe",
                height:250,
                marginLeft:210,
                bottom:260
                }}>
                <Body>
                <Image
                        style={{ width: 50, height: 50, left: 35 }}
                        source={{ uri: "https://i.imgur.com/rofgmYg.png" }}
                      />
                      <Text style={{ top: 10, left: 10 }}>BERKEMBANG</Text>
                      <Text style={{ top: 20, left: 40 }}>IPS</Text>
                
                </Body>
              </Card>
               </List>
        </Content>
       
      </Container>
      
    );
  }
}
