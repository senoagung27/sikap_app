import React, { Component } from 'react';
import { AppRegistry, View, Image, Alert } from 'react-native';
import { TabNavigator } from "react-navigation";
import {
    Container, Header, Drawer, Content, List, ListItem, ListView, Left, Body, Card, CardItem,
    Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab, Form, Item, Input, Label
} from 'native-base';
export default class input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id_tempat: "",
            nama: "",
            alamat: "",
            fasilitas: "",
            wahana: "",
            harga_masuk: 0,
            refreshing: false,
        };
    }

    handleDone() {
        const {navigate} = this.props.navigation;
        let id_tempat = (this.state.id_tempat);
        let nama = (this.state.nama);
        let alamat = (this.state.alamat);
        let fasilitas = (this.state.fasilitas);
        let wahana = (this.state.wahana);
        let harga_masuk = parseInt(this.state.harga_masuk);

        var axios = require('axios');
        var data = new FormData();
        var obj = {
            id_tempat: id_tempat,
            nama: nama,
            alamat: alamat,
            fasilitas: fasilitas,
            wahana: wahana,
            harga_masuk: harga_masuk
        };

        var myJson = JSON.stringify(obj)
        axios.post('https://rimba.000webhostapp.com/itats_wisata.php', (myJson))
            .then(function (response) {
                Alert.alert('Sukses', 'Data sudah diinput',
                [
                    {text: 'OK', onPress: () => navigate('Tempat')},
                  ],
            );
            
            })
            .catch(function (error) {
               Alert.alert('Error', error);
            })
    }


    render() {
        const {navigate} = this.props.navigation;
        return (

            <Container style={{ backgroundColor: '#ffdab9' }}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Pariwisata online</Title>
                    </Body>
                </Header>
                <Content style={{ backgroundColor: '#ffdab9' }}>
                <Card style={{flex: 0}}>
                <CardItem style={{ backgroundColor: '#ffdab9' }}>
                <Content style={{ backgroundColor: '#ffdab9' }}>
                    <List>
                        <ListItem itemDivider style={{ backgroundColor: '#ffdab9' }} >
                            <Text>Form Input Tempat Wisata</Text>
                        </ListItem>
                        <Form>
                            <Item floatingLabel>
                                <Label>ID Tempat</Label>
                                <Input onChangeText={(id_tempat) => this.setState({ id_tempat })}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Nama Tempat Wisata</Label>
                                <Input onChangeText={(nama) => this.setState({ nama })} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Alamat Tempat Wisata</Label>
                                <Input onChangeText={(alamat) => this.setState({ alamat })} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Fasilitas</Label>
                                <Input onChangeText={(fasilitas) => this.setState({ fasilitas })} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Wahana</Label>
                                <Input onChangeText={(wahana) => this.setState({ wahana })} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Harga Tiket Masuk</Label>
                                <Input onChangeText={(harga_masuk) => this.setState({ harga_masuk })} />
                            </Item>
                            <Button rounded success onPress={() => this.handleDone({})}>
                                <Text>Save</Text>
                            </Button>
                        </Form>
                    </List>
                </Content>
                </CardItem>
                </Card>
                </Content>
            </Container>
        );
    }
}
