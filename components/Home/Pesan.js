import React, { Component } from 'react';
import { AppRegistry, View, Image, RefreshControl, ListView } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Container, Header, Drawer, Content,H1, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';


export default class Pesan extends React.Component {

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
          <H1 style={{color:'white'}}>PESAN</H1>
          </Body>
        </Header>

        
        <Content style={{ backgroundColor: 'white' }}>
        <Card>
            <CardItem header>
              <Text>Pembayaran SPP</Text>
              <Icon active style={{left:200}} name="navigate" />
                <Text note style={{top:20, left:150}}>Perkecil</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Jumlah</Text><Text style={{bottom:28 ,left:150}}>1.500.000</Text>
                <Text >Status</Text><Text style={{bottom:28 ,left:150}}>Lunas</Text>
                <Text >Tagihan</Text><Text style={{bottom:28 ,left:150}}>Juli</Text>
                <Text >Tanggal</Text><Text style={{bottom:28 ,left:150}}>{tanggal}</Text>
              </Body>
            </CardItem>
                    </Card>

                    <Card>
            <CardItem header>
              <Text>Kehadiran</Text>
                  <Icon active style={{left:255}} name="navigate" />
                <Text note style={{top:20, left:200}}>Perkecil</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Waktu</Text><Text style={{bottom:28 ,left:150}}>06.30 AM</Text>
                <Text >Status</Text><Text style={{bottom:28 ,left:150}}>Tepat Waktu</Text>
                <Text >Aktivitas</Text><Text style={{bottom:28 ,left:150}}>Upacara Dan Praktek Sholat</Text>
                <Text >Tanggal</Text><Text style={{bottom:28 ,left:150}}>{tanggal}</Text>
              </Body>
            </CardItem>
                    </Card>

                    <Card>
            <CardItem header>
              <Text>Kehadiran</Text>
                  <Icon active style={{left:255}} name="navigate" />
                <Text note style={{top:20, left:200}}>Perkecil</Text>
             </CardItem>
            <CardItem>
              <Body>
                <Text>Waktu</Text><Text style={{bottom:28 ,left:150}}>06.30 AM</Text>
                <Text >Status</Text><Text style={{bottom:28 ,left:150}}>Tepat Waktu</Text>
                <Text >Aktivitas</Text><Text style={{bottom:28 ,left:150}}>Upacara Dan Praktek Sholat</Text>
                <Text >Tanggal</Text><Text style={{bottom:28 ,left:150}}>{tanggal}</Text>
              </Body>
            </CardItem>
                    </Card>          
        </Content>
        
      </Container>
      
    );
  }

}
