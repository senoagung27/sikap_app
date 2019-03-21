import React, { Component } from 'react';
import { AppRegistry, View, Image, RefreshControl, ListView } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Container, Header, Drawer,H1, Content, List, ListItem, DeckSwiper, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';



export default class Home extends React.Component {
  constructor(){
    super()
    this.data = [
      {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
      {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
      {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
      {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
      {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
    ]
  } 
  render () {
    return (
      

      <Container style={{ backgroundColor: 'white' }}>
        <Header style={{backgroundColor:'white'}}>
          <Left>
            <Button 
            transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={{color:'#00aeef'}} name='menu' />
            </Button>
          </Left>
          <Body>
          <Image
          style={{width: 110, height: 80 ,right:60}}
          source={{uri: 'https://i.imgur.com/Kv28RBz.png'}}
        />
          </Body>
        </Header>
        
        
        <Content style={{ backgroundColor: 'white' }}>
        <List>
            <Card style={{marginTop:200, marginRight:200}}>
              <CardItem style={{ backgroundColor: 'white' }}>
                <Body>
                  <Image 
                  source={{ uri: 'https://img.icons8.com/office/2x/money.png' }} 
                  style={{ height:50, width: 50 }} />
                  <Text >
                    Keuangan
                </Text>
                </Body>
              </CardItem>
            </Card>
            
          </List>
         
         
          <List>
            <Card style={{marginTop:-100, marginLeft:220}}>
              <CardItem style={{ backgroundColor: 'white' }}>
                <Body>
                  <Image 
                  source={{ uri: 'https://img.icons8.com/office/2x/test-failed.png' }} 
                  style={{ height:50, width: 50 }} />
                  <Text >
                    Absensi
                </Text>
                </Body>
              </CardItem>
            </Card>
            
          </List>

          <List>
            <Card style={{marginTop:5, marginRight:200}}>
              <CardItem style={{ backgroundColor: 'white' }}>
                <Body>
                  <Image 
                  source={{ uri: 'https://img.icons8.com/office/2x/exam.png' }} 
                  style={{ height:50, width: 50 }} />
                  <Text >
                    Daftar Nilai
                </Text>
                </Body>
              </CardItem>
            </Card>
            
          </List>
          <List>
            <Card style={{marginTop:-100, marginLeft:220}}>
              <CardItem style={{ backgroundColor: 'white' }}>
                <Body>
                  <Image 
                  source={{ uri: 'https://img.icons8.com/office/2x/conference-call.png' }} 
                  style={{ height:50, width: 50 }} />
                  <Text >
                    Daftar Siswa
                </Text>
                </Body>
              </CardItem>
            </Card>
            
          </List>

          
          
         
        </Content>
        
        
      
      </Container>
      
      
    );
  }

}
