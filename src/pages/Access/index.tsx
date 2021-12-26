import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import Button from '../../components/Button';
import Separator from '../../components/Separator';
import appColors from '../../styles/colors';
import { appFonts } from '../../styles/fonts';
import banner from '../../../assets/images/banner/image.png';
import { useNavigation } from '@react-navigation/native';

const  Access: React.FC = () => {
  const navigation = useNavigation()

  const handleButtonLogin = ()=> navigation.navigate('login')
  
  return (
    <SafeAreaView
      style={{
        backgroundColor:appColors.backgroundScreen, 
        flex:1,
        justifyContent:'space-between'
      }}
    >
      <Image style={{width:'100%', height:400, marginTop:-25 }} resizeMode='contain' source={banner}/>
      <View style={{marginHorizontal: 20, justifyContent:'flex-end', }}>
        <Text style={[appFonts.Bold,{fontSize:22, textAlign:'center'}]}>{`Aprenda a investir e\nconquiste sua liberdade\nfinanceira`}</Text>
        <Separator height={30}/>
        <Button 
          title='Assine agora' 
        />
        <Separator height={20}/>
        <Button
          outlined
          icon='email-outline'
          title='Entrar com e-mail' 
          onPress={handleButtonLogin}
        />
        <Separator height={45}/>
      </View>
    </SafeAreaView>
  )

};

export default  Access;