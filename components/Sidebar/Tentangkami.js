import React, { Component } from 'react';
import { AppRegistry, View,ScrollView, Image } from 'react-native';
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
                  <ScrollView>
                  <Text>Tentang Kami{"\n\n"}</Text>
                  <Text>
                  SIKAP adalah Applikasi Sekolah yang dapat memuat informasi detail, dapat di download disini.
                  Sebagai solusi Administrasi Terpadu untuk Sekolah, yang mencakup berbagai model platform dan 
                  bersifat fleksibel sehingga SIKAP dapat diakses oleh semua Orang tua Siswa, Guru, 
                  dan Staf/Karyawan di sekolah. {"\n\n"} </Text>
                  <Text>Latar Belakang {"\n\n"}</Text>
                  <Text>Penerapan teknologi informasi untuk menunjang proses Pendidikan, 
                  telah menjadi kebutuhan bagi lembaga pendidikan di Indonesia. 
                  Pemanfaatan teknologi informasi ini sangat dibutuhkan untuk meningkatkan 
                  efisiensi dan produktivitas, bagi manajemen pendidikan 
                  ikut andil menentukan kelangsungan hidup dan perkembangan pendidikan itu sendiri.
                  Dengan kata lain menunda penerapan teknologi informasi dalam lembaga pendidikan berarti menunda 
                  keberhasilan pendidikan dalam menghadapi persaingan global di semua era.
                  Pemanfaatan teknologi informasi diperuntukan bagi peningkatan kinerja lembaga pendidikan 
                  dalam upaya meningkatkan kualitas sumber daya manusia di Indonesia. 
                  Guru dan pengurus sekolah tidak lagi disibukkan oleh pekerjaan-pekerjaan operasional yang sesungguhnya dapat digantikan oleh komputer. 
                  Penghematan waktu dan kecepatan penyajian informasi akibat penerapan teknologi informasi tersebut akan memberikan kesempatan 
                  kepada guru dan pengurus sekolah untuk meningkatkan kualitas komunikasi. 
                  Orang tua siswa akan tau perkembangan yang ada pada putra-putrinya, dan dapat membantu pembinaan siswa. 
                  Sehingga pembinaan dan analisa siswa dapat terjadi dari dua arah, pihak sekolah dan pihak orang tua. 
                  Dengan demikian siswa akan merasa lebih dimanusiakan dalam upaya mengembangkan kepribadian dan pengetahuannya.
</Text>
<Text>Visi{"\n\n"}</Text>
<Text>mewujudkan dunia pendidikan Indonesia yang didukung sistem informasi untuk menciptakan manajemen yang 
termonitoring dan transparan serta mencakup segenap/semua elemen di bidang pendidikan.{"\n\n"}</Text>
<Text>Misi{"\n\n"}</Text>
<Text>) mengaplikasikan sistem informasi sekolah, guna menciptakan proses pengolahan data yang cepat,
accountable, efektif dan efisien pada masing-masing divisi sekolah, dengan memanfaatkan sistem data 
terintegrasi, serta memberikan wadah bagi lembaga pendidikan untuk dapat berkembang dan berkompetisi 
menuju sekolah hebat.{"\n\n"}</Text>


                    <Image
          style={{width: 150, height: 100 , left:120 , top:15}}
          source={{uri: 'https://i.pinimg.com/originals/9a/be/25/9abe2519e3c7d05f4457b997a3988b8d.png'}}
        />
<Text>Content target mobile{"\n\n"}</Text>
<Text>Pertanyaan	: Ke mana saya bisa menghubungi layanan pelanggan SIKAP ?
Jawaban	: Kamu bisa menghubungi SIKAP melalui :
</Text>
<Text>Telepon/WA	: 0822-3471-0151</Text>
<Text>Email		: info@sikap.in</Text>
                  </ScrollView>
                </Body>
              </CardItem>
            </Card>
          </List>
        </Content>
      </Container>
    );
  }
}
