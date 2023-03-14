import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import { Alert, Modal, StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 




export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  let fetchRes = fetch(
    "http://bashrc.ezyro.com/maclar.php?kod=139&tarih=14/03/2023");
    // fetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
        })

  return (
    
    
    <SafeAreaView style={styles.container}>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Seçenekler!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Puan Durumu</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Canlı Sonuçlar</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Takvim</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Kupon Tahmin</Text>
            </Pressable>

          </View>
        </View>
      </Modal>


    <View style={styles.topBar}>
    <View style={styles.leftBar}>

      <Pressable  onPress={() => setModalVisible(true)}>
      <Ionicons name="reorder-three-outline" size={24} color="white" />
            </Pressable>
      </View>

    <Text style={styles.title}>macplace</Text>

    <View style={styles.rightBar}>
      <Pressable>
      <AntDesign name="search1" size={24} color="white" />

      </Pressable>
          </View>

     

      <StatusBar backgroundColor='#865DFF' />
    </View>

    <View style={styles.content}>
    
    <View style={styles.subTopBar}>
    <Text style={styles.macTitle}>Bugünkü Maçlar</Text>
    </View>
    <Text style={styles.macTitle}>Maçlar</Text>
  
      <View style={styles.maclar}>


      </View>

      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF2F2",
  },

content: {
},

  macTitle:{
    padding: 3,
    color: "#fff",
    fontSize: 13,
    fontWeight: "300",
  },
  subTopBar:{
    backgroundColor: "#202021",
  },
  macSub: {
    color: "#000",
    fontSize: 14,
    fontWeight: "300",
    fontStyle: "italic",
    marginTop: 3,
    padding: 2,
  },

  topBar: {
    textAlign: "center",
    flexDirection: "row",
    
    paddingTop: "15%",
    paddingBottom: "4%",
    backgroundColor: "#865DFF",
  },

  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
  },

  leftBar:{
    marginRight: "33%",
    marginLeft: "2%",
  },

  rightBar:{
    marginLeft: "27%",
  },


  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginBottom: 15,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 250,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },


});
