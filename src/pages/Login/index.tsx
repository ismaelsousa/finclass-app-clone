import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import { Button } from 'react-native-paper';
import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import appColors from '../../styles/colors';
import { appFonts } from '../../styles/fonts';

const  Login: React.FC = () => {
  
return (
  <SafeAreaView style={{backgroundColor:appColors.backgroundScreen, flex:1,
  }}>
    <View style={{backgroundColor:appColors.backgroundScreen, flex:1, marginHorizontal: 20,}}>
    <View style={{height:20}}/>
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <BackButton/>
      <View style={{flexDirection:'row',}}>
        <Text style={[appFonts.Regular,{fontSize:13}]}>Recuperar senha</Text>
        <View style={{width:10}}/>
        <Image style={{width:16,height:16, }} resizeMode='contain' source={require('./../../../assets/icons/lock/icon.png')}/>
      </View>
    </View>
    <View style={{height:30}}/>
    <Text style={[appFonts.Bold, {fontSize:22}]}>{`Acessar\nminha conta`}</Text>
    <View style={{height:35}}/>
    <Input   
      placeholder='Insira seu e-mail'
      // error='E-mail é obrigatório'
      name='E-mail'
    />
     <View style={{height:25}}/>
    <Input   
      placeholder='Insira sua senha'
      name='Senha'
    />
     
    <View style={{height:55}}/>
  
   
    <Button
    // disabled

     uppercase={false}
    compact={false}
    labelStyle={{fontSize:12, ...appFonts.Bold, color:appColors.backgroundScreen}}
    style={{
      height: 50, 
      alignItems:'center',
      justifyContent:'center'
    }} mode="contained" onPress={() => console.log('Pressed')}>
      Entrar
    </Button>
    </View>
  </SafeAreaView>
)

};

export default  Login;