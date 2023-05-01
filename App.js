import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput , Button, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';


export default function App() {
  return(
    <View style={estilos.janela}>
      <View style={estilos.item_login}>
       <Text style={estilos.titulo}>Login do Usuario</Text>
        <Image source={require('./assets/logo_estacio.jpg')} style={estilos.logo}></Image>

       

        <TextInput style={estilos.textCampo} placeholder={' Usuario: '}></TextInput>
        <TextInput style={estilos.textCampo} placeholder={' Senha: '}></TextInput>
       <View style={estilos.botao}>
         <Button 
         title="Entrar"
         color="purple"
         borderRadius="10px"
         onPress={"outraTela"}
         />
       </View> 

       <TouchableOpacity style={estilos.meuBotao}>
       Limpar
       </TouchableOpacity>

      </View>
    </View>
  );
}

const estilos = StyleSheet.create({

  meuBotao:{
    width:'90%',
    height:'30px',
    backgroundColor: 'purple',
    borderRadius:'10px',
    margin:'15px',
    textAlign:'center',
    color:'white'

  },
  botao:{
    margin: '15px'
  },
  janela:{
    flex: 1,
    background: 'purple'
  },
  item_login:{
    margin:'15px',
    backgroundColor: 'white',
    width: '90%',
    height:'80%',
    borderRadius: '10px'
  }, 
  titulo:{
    textAlign: 'center',
    fontSize: '20px',
    marginTop: '20px'
  },
  textCampo:{
    border: '1px purple solid',
    margin: '10px',
    borderRadius: '10px'
  },
  logo:{
    width: '100px',
    height: '100px',
    alignSelf: 'center',
    marginTop: '10px',
    borderRadius: '10px'
  }

});


