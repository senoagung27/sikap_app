import React, { Component } from 'react';
import { AppRegistry, View, Image, RefreshControl, ListView } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Container, Header, Drawer, Content, List, ListItem,H1,Row, Left, Body, Card, CardItem,Grid, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';


export default class Profile extends React.Component {

  render() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var tanggal = date + '-' + month + '-' + year;

    return (

      <Container style={{ backgroundColor: 'white' }}>
        <Header style={{backgroundColor:'#2AC4F3'}}>
          <Left>
            <Button 
            transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={{color:'white'}} name='menu' />
            </Button>
          </Left>
          <Body>
          
         <H1 style={{color:'white'}}>PROFILE</H1>
          </Body>
          
        </Header>
        <Content style={{ backgroundColor: 'white' }}>
        <List>
            <Card style={{height:100}}>
              <CardItem style={{ backgroundColor: '#fcee21' }}>
                <Body>
                <H1 style={{left:90}}>
                    Putra Wahyu
                </H1>
                <Text style={{left:100}}>Kelas XII A (IPA)</Text>
                  <Image 
                  source={{ uri: 'https://i.imgur.com/zBwTWJo.png' }} 
                  style={{ height:50, width: 50,bottom:50,left:30 }} />
                
                </Body>
              </CardItem>
            </Card>
            </List>
          

            <List>
            
            <Card style={{flex: 0}}>
            <CardItem style={{backgroundColor:'#00aeef'}}>
              <Left>
                <Thumbnail square style={{width:50, height:50}} source={{uri: 'https://i.imgur.com/XS0Dn1t.png'}} />
                <Body>
                  <H1 style={{color:'white'}}>Mata Pelajaran Umum</H1>
                  </Body>
              </Left>
            </CardItem>
            <CardItem style={{backgroundColor:'#cfeef9'}}>
              <Body>
              <CardItem style={{backgroundColor:'white',height:140, marginRight:220 ,borderRadius:10,top:40}}>  
                <Body>
                <Image
          style={{width: 50, height: 50, left:35}}
          source={{uri: 'https://i.imgur.com/rofgmYg.png'}}
        />
                  <Text style={{ top:10,left:10}}>
                    BERKEMBANG
                  </Text>
                  <Text style={{top:20, left:40}}>
                    KIMIA
                  </Text>
                </Body>
              </CardItem>
              <Text note style={{left:170, bottom:20 ,fontSize:12}}>PEMAHAMAN</Text>
              <Text note style={{left:170, bottom:10 ,fontSize:12}}>KEAKTIFAN</Text>
              <Text style={{left:270, bottom:52 ,fontSize:12, fontWeight:'bold'}}>MUDAH MEMAHAMI</Text>
              <Text style={{left:270, bottom:43 ,fontSize:12, fontWeight:'bold'}}>AKTIF BERTANYA</Text>
               </Body>

            </CardItem>
            <Text style={{backgroundColor:'#cfeef9'}}>________________________________________________________</Text>
            <CardItem style={{backgroundColor:'#cfeef9'}}>
              <Body>
              <CardItem style={{backgroundColor:'white',height:140, marginRight:220 ,borderRadius:10}}>
                <Body>
                <Image
          style={{width: 50, height: 50, left:35}}
          source={{uri: 'https://i.imgur.com/byiDMiy.png'}}
        />
                  <Text style={{ top:10,left:20}}>
                    MENURUN
                  </Text>
                  <Text style={{top:20, left:10}}>
                    MATEMATIKA
                  </Text>
                </Body>
              </CardItem>
              <Text note style={{left:170, bottom:50 ,fontSize:12}}>PEMAHAMAN</Text>
              <Text note style={{left:170, bottom:40 ,fontSize:12}}>KEAKTIFAN</Text>
              <Text style={{left:270, bottom:83 ,fontSize:12, fontWeight:'bold'}}>MUDAH MEMAHAMI</Text>
              <Text style={{left:270, bottom:73 ,fontSize:12, fontWeight:'bold'}}>AKTIF BERTANYA</Text>
               </Body>
            </CardItem>
             </Card>

            </List>
 
 
 
            <List>
            
            <Card style={{flex: 0}}>
            <CardItem style={{backgroundColor:'#00aeef'}}>
              <Left>
                <Thumbnail square style={{width:50, height:50}} source={{uri: 'https://i.imgur.com/aBRqbq1.png'}} />
                <Body>
                  <H1 style={{color:'white'}}>Mata Pelajaran Agama</H1>
                  </Body>
              </Left>
            </CardItem>
            <CardItem style={{backgroundColor:'#cfeef9'}}>
              <Body>
              <CardItem style={{backgroundColor:'white',height:140, marginRight:220 ,borderRadius:10}}>
                <Body>
                <Image
          style={{width: 50, height: 50, left:35}}
          source={{uri: 'https://i.imgur.com/rofgmYg.png'}}
        />
                  <Text style={{ top:10,left:10}}>
                    BERKEMBANG
                  </Text>
                  <Text style={{top:20, left:40}}>
                    KIMIA
                  </Text>
                </Body>
              </CardItem>
            
               </Body>
            </CardItem>
            <Text style={{backgroundColor:'#cfeef9'}}>________________________________________________________</Text>
            <CardItem style={{backgroundColor:'#cfeef9'}}>
              <Body>
              <CardItem style={{backgroundColor:'white',height:140, marginRight:220 ,borderRadius:10}}>
                <Body>
                <Image
          style={{width: 50, height: 50, left:35}}
          source={{uri: 'https://i.imgur.com/byiDMiy.png'}}
        />
                  <Text style={{ top:10,left:20}}>
                    MENURUN
                  </Text>
                  <Text style={{top:20, left:10}}>
                    MATEMATIKA
                  </Text>
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
