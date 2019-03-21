import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
import { Container, Header, Drawer, Content, List, ListItem, Left, Separator, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class Bantuan extends React.Component {
  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name='menu' />
              <Title>   Bantuan</Title>
            </Button>
          </Left>
          <Body>
          </Body>
        </Header>
        <Content style={{ backgroundColor: 'white' }}>
          <List>
            <Card style={{ flex: 0 }}>
              
            <Separator bordered style={{backgroundColor:'grey'}}>
            <Text style={{fontSize:12, color:'black'}}>Pertanyaan yang Sering Diajukan</Text>
          </Separator>
              <ListItem icon>
            <Body>
              <Text>Pertanyaan 1</Text>
            </Body>
            <Right>
              <Icon  name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Body>
              <Text>Pertanyaan 2</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          
          <ListItem icon>
            <Body>
              <Text>Pertanyaan 3</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          
          <Separator bordered style={{backgroundColor:'grey'}}>
            <Text style={{fontSize:12, color:'black'}}>Butuh Bantuan ?</Text>
          </Separator>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="chatbubbles" />
              </Button>
            </Left>
            <Body>
              <Text>Hubungin Kami</Text>
              <Text note style={{fontSize:10}}>Hubungin Kami Untuk Informasi lebih lanjut</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          
          
            </Card>
          </List>
        </Content>
        <Image
          style={{width: 150, height: 100 , left:120 , bottom:190}}
          source={{uri: 'https://i.pinimg.com/originals/9a/be/25/9abe2519e3c7d05f4457b997a3988b8d.png'}}
        />
      </Container>
    );
  }
}
