import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
import { Container, Header, Drawer, Content, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class Tentangkami extends React.Component {
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
            <Title style={{right:60}}>Tentang kami</Title>
          </Body>
        </Header>
        <Content style={{ backgroundColor: 'white' }}>
          <List>
            <Card style={{ flex: 0 , marginLeft:10, marginRight:10, height:550 }}>
              <CardItem style={{ backgroundColor: 'white' }}>
                <Body>
                  <Text>
                  Lorem Ipsum is simply dummy text of the printing and 
                  typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown 
                  printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also
                   the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software like 
                    Aldus PageMaker including versions of Lorem Ipsum. {"\n\n"} </Text>
                    <Image
          style={{width: 150, height: 100 , left:120 , top:15}}
          source={{uri: 'https://i.pinimg.com/originals/9a/be/25/9abe2519e3c7d05f4457b997a3988b8d.png'}}
        />
                  
                </Body>
              </CardItem>
            </Card>
          </List>
        </Content>
      </Container>
    );
  }
}
