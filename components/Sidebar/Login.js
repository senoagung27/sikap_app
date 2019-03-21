import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
import { Container, Header, Drawer, Content, List, ListItem, Form, Item, Input, Label,Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
const screens = ["Signup","Daftar"];
export default class Login extends React.Component {
  render() {
    return (
      <Container transparent style={{ backgroundColor: 'white' }}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Sikap</Title>
          </Body>
        </Header>
       
      <Content style={{ backgroundColor: 'white' }}>
                <Card style={{flex: 0}}>
                <CardItem style={{ backgroundColor: 'white' }}>
                <Content style={{ backgroundColor: 'white',bottom:50,left:50 }}>
                <Image
          style={{width: 300, height: 200}}
          source={{uri: 'https://i.pinimg.com/originals/9a/be/25/9abe2519e3c7d05f4457b997a3988b8d.png'}}
        />
                    
                </Content>
                </CardItem>
                </Card>
                </Content>
                
                
                
                
                <Content style={{ backgroundColor: 'white',bottom:70 }}>
                <Card transparent style={{flex: 0}}>
                <CardItem transparent style={{ backgroundColor: 'white' }}>
                <Content style={{ backgroundColor: 'white' }}>
                    <List>
                        <Form>
                        
                            <Item stackedLabel style={{borderBottomColor:'blue', borderBottomWidth:3}}>
                            
                                <Input Icon placeholder='username' onChangeText={(id_tempat) => this.setState({ id_tempat })}/>
                                
                            </Item>
                            <Item stackedLabel style={{borderBottomColor:'blue', borderBottomWidth:3}}>
                            <Icon active name='eye' />
                                <Input placeholder='password' onChangeText={(nama) => this.setState({ nama })} />
                                <Icon name='eye' />
                            </Item>
                            
                        </Form>
                    </List>


                    <Text note style={{left:270, fontSize:18}}>lupa sandi ?</Text> 


                </Content>
                </CardItem>
                </Card>
                </Content>
                <Content style={{ backgroundColor: 'white', bottom:50 }}>
                
                <Card style={{flex: 0 , backgroundColor:'white'}}>
                <CardItem style={{ backgroundColor: 'white', height:200 }}>
                    <Button rounded style={{left:110, top:50 ,width:200}}>
            <Text>                Daftar</Text>
          </Button>
          <Button rounded style={{left:-90 ,width:200}}>
            <Text>                Login</Text>
          </Button>

                    
                
                </CardItem>
                </Card>
                </Content>
                
      </Container>
    );
  }
}