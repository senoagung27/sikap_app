import React, { Component } from 'react';
import { AppRegistry, View, ScrollView, Image } from 'react-native';
import { Container, Header, Radio,DatePicker,Drawer, Content, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Item, Input,  Button, Icon, Title, Text, Tab, Footer, FooterTab, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class Aturakun extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
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
            <Title style={{right:60}}>Antur Akun</Title>
          </Body>
        </Header>
        <ScrollView>
      <Text style={{color:'grey'}}>  {"\n"}    NIS (nomer induk siswa)</Text>
      <Text style={{color:'blue'}}>    123456789{"\n"}{"\n"}</Text>
      <Text>    Ubah Data Diri</Text>
      <Text>    ____________________________________________________{"\n"}{"\n"}</Text>
      <Item rounded style={{height:40,width:170, left:20, borderColor:'blue'}}><Text style={{left:20, color:'grey'}}>
          Nama Lengkap</Text></Item>
          <Item rounded style={{height:40,width:200,bottom:40, left:200 ,borderColor:'blue'}}>
       
            <Input placeholder='nama lengkap'/>
          </Item>
          <Item rounded style={{height:40,width:170,bottom:30, left:20, borderColor:'blue'}}><Text style={{left:20 , color:'grey'}}>
          Tanggal Lahir</Text></Item>
          <Item rounded style={{height:40,width:200,bottom:70, left:200 ,borderColor:'blue'}}>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(1800, 1, 1)}
            maximumDate={new Date(2019, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "grey" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
         
            <Input/>
          </Item>
    
          <Item rounded style={{height:40,width:170,bottom:60, left:20, borderColor:'blue'}}><Text style={{left:20, color:'grey'}}>
          Jenis Kelamin</Text></Item>
          <Item rounded style={{height:40,width:200,bottom:90, left:200 ,borderColor:'white'}}>
       
          <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={true}
              /><Text> Pria  </Text>
                        <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={false}
              /><Text> Wanita</Text>

          </Item>
            
          <Text style={{bottom:70}}>    Ubah Akun</Text>
      <Text style={{bottom:70}}>    ____________________________________________________</Text>
      <Item rounded style={{height:40,width:170, left:20, borderColor:'blue',bottom:60}}><Text style={{left:20, color:'grey'}}>
          Username</Text></Item>
          <Item rounded style={{height:40,width:200,bottom:40, left:200 ,borderColor:'blue',bottom:100}}>
       
            <Input placeholder='username'/>
          </Item>
          <Item rounded style={{height:40,width:170, left:20, borderColor:'blue',bottom:80}}><Text style={{left:20, color:'grey'}}>
          Kata Sandi Lama</Text></Item>
          <Item rounded style={{height:40,width:200,bottom:40, left:200 ,borderColor:'blue',bottom:120}}>
       
            <Input placeholder='kata sandi lama'/>
          </Item>
          <Item rounded style={{height:40,width:170, left:20, borderColor:'blue',bottom:100}}><Text style={{left:20, color:'grey'}}>
          Kata Sandi Baru</Text></Item>
          <Item rounded style={{height:40,width:200,bottom:40, left:200 ,borderColor:'blue',bottom:140}}>
       
            <Input placeholder='kata sandi baru'/>
          </Item>
          <Item rounded style={{height:40,width:170, left:20, borderColor:'blue',bottom:120}}><Text style={{left:20, color:'grey',fontSize:14}}>
          Kata Sandi Baru Ulang</Text></Item>
          <Item rounded style={{height:40,width:200,bottom:40, left:200 ,borderColor:'blue',bottom:160}}>
       
            <Input placeholder='kata sandi baru ulangi' style={{fontSize:16}} />
          </Item>

          <Text style={{bottom:130}}>    Ubah Kontak</Text>
      <Text style={{bottom:130}}>    ____________________________________________________</Text>
          <Item rounded style={{height:40,width:170, left:20, borderColor:'blue'}}><Text style={{left:20, color:'grey'}}>
          Nama Lengkap</Text></Item>
          <Item rounded style={{height:40,width:200,bottom:40, left:200 ,borderColor:'blue'}}>
       
            <Input placeholder='nama'/>
          </Item>
          <Item rounded style={{height:40,width:170, left:20, borderColor:'blue'}}><Text style={{left:20, color:'grey'}}>
          Nama Lengkap</Text></Item>
          <Item rounded style={{height:40,width:200,bottom:40, left:200 ,borderColor:'blue'}}>
       
            <Input placeholder='nama'/>
          </Item>


</ScrollView>
      </Container>
    );
  }
}
