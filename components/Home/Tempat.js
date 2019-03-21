import React, { Component } from 'react';
import { AppRegistry, View, Image, ActivityIndicator, ListView, RefreshControl } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Container, Header, Drawer, Content, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import axios from 'axios';

export default class Tempat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      refreshing: false,
      error: null,
    }
  }

  componentDidMount() {
    return fetch('https://rimba.000webhostapp.com/itats_wisata.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          isLoading: false,
          refreshing: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function () {

        });
      })
      .catch((error) => {
        this.setState({ error, isLoading: false, refreshing: false });
      });
  }
  handleRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        this.componentDidMount();
      }
    );
  };

  render() {
    this.componentDidMount();
    const {state} = this.props.navigation;    
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
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
        <ListView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh}
            />
          }
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <Card style={{ flex: 0 }}>
              <CardItem style={{ backgroundColor: '#ffdab9' }}>
                <Left>
                  <Thumbnail source={{ uri: 'http://tourism.sumbawakab.go.id/assets/media/photo/wisatakita.jpg' }} />
                  <Body>
                    <Text>{rowData.Nama}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem style={{ backgroundColor: '#ffdab9' }}>
                <Body>
                <Grid>
                    <Col size={1}>
                      <Text>
                        Alamat{'\n'}
                      </Text>
                    </Col>
                    <Col size={2}>
                      <Text>
                        {': ' + rowData.Alamat + '\n'}
                      </Text>
                    </Col>
                  </Grid>
                  <Grid>
                    <Col size={1}>
                      <Text>
                        Fasilitas{'\n'}
                      </Text>
                    </Col>
                    <Col size={2}>
                      <Text>
                        {': ' + rowData.Fasilitas + '\n'}
                      </Text>
                    </Col>
                  </Grid>
                  <Grid>
                    <Col size={1}>
                      <Text>
                        Wahana{'\n'}
                      </Text>
                    </Col>
                    <Col size={2}>
                      <Text>
                        {': ' + rowData.Wahana + '\n'}
                      </Text>
                    </Col>
                  </Grid>
                  <Grid>
                    <Col size={1}>
                      <Text>
                        Harga Masuk{'\n'}
                      </Text>
                    </Col>
                    <Col size={2}>
                      <Text>
                        {': Rp.' + rowData.Harga_masuk + '\n'}
                      </Text>
                    </Col>
                  </Grid>
                </Body>
              </CardItem>
            </Card>
          } />
      </Container>
    );
  }
}
