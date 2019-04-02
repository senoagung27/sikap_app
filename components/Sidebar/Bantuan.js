import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
import { Container, Header, Drawer, Content, List,Accordion, ListItem, Left, Separator, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
const dataArray = [
  { title: "Pertanyaan 1", content: "Sekolah menjadi Lembaga formal yang menyelenggarakan Pendidikan. Selain sekolah peran penting orangtua dalam Pendidikan anak merupakan titik sentral dalam keberhasilan pendidikan anak. SIKAP merupakan solusi penyampaian informasioleh sekolah kepada orangtua siswa dengan mudah, cepat dan akurat" },
  { title: "Pertanyaan 2", content: "Lorem ipsum dolor sit amet" },
  { title: "Pertanyaan 3", content: "Lorem ipsum dolor sit amet" }
];
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
        <Content padder>
        <Separator bordered>
            <Text>Pertanyaan yang sering diajukan</Text>
          </Separator>
          <Text></Text>
          <Accordion dataArray={dataArray} expanded={0}/>
          <Text></Text>
          <Separator bordered>
            <Text>Butuh Bantuan ?</Text>
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
        </Content>
        <Image
          style={{width: 150, height: 100 , left:120 , bottom:190}}
          source={{uri: 'https://i.pinimg.com/originals/9a/be/25/9abe2519e3c7d05f4457b997a3988b8d.png'}}
        />
      </Container>
    );
  }
}
