import React from 'react';
import { useTheme, Button as BtnPaper, IconButton } from 'react-native-paper';
import appColors from '../../styles/colors';
import { appFonts } from '../../styles/fonts';
import { Props } from './types';


const  Button = ({title, onPress, disabled, icon, outlined }:Props) => {
  const {colors} = useTheme()

  if(disabled) {
    return (
      <BtnPaper
        icon={({color})=> icon? <IconButton icon={icon} color={color} size={20}/>:null}
        uppercase={false}
        compact={false}
        labelStyle={{fontSize:12, ...appFonts.Bold, color:colors.placeholder}}
        style={{
          height: 50, 
          alignItems:'center',
          justifyContent:'center',
          borderColor:colors.backdrop,
          borderWidth:1.5
        }} 
        mode="outlined" 
        onPress={onPress}
      >
        {`${title}`}
      </BtnPaper>
    )
  }
  if(outlined){
    return (
      <BtnPaper
        icon={({color})=> icon? <IconButton icon={icon} color={color} size={20}/>:null}
        uppercase={false}
        compact={false}
        labelStyle={{fontSize:12, ...appFonts.Bold, color:colors.text}}
        style={{
          height: 50, 
          alignItems:'center',
          justifyContent:'center',
          borderColor:colors.backdrop,
          borderWidth:1.5
        }} 
        mode="outlined" 
        onPress={onPress}
      >
        {`${title}`}
      </BtnPaper>
    );
  }
return (
  <BtnPaper
    icon={({color})=> icon? <IconButton icon={icon} color={color} size={20}/>:null}
    uppercase={false}
    compact={false}
    labelStyle={{fontSize:12, ...appFonts.Bold, color:appColors.backgroundScreen}}
    style={{
      height: 50, 
      alignItems:'center',
      justifyContent:'center'
    }} mode="contained" onPress={onPress}
    >
      {`${title}`}
  </BtnPaper>
 )

};

export default  Button;