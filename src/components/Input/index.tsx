import React, { useMemo, useState } from 'react';
import {TextInput,Text, View} from 'react-native';
import {  useTheme } from 'react-native-paper';
import { appFonts } from '../../styles/fonts';
import { Props } from './types';

// import {Container} from './styles'

const  Input = ({error,name,  placeholder}:Props) => {
  const {colors} = useTheme()
  const [hasFocus, setHasFocus] = useState(false)

  const handleBorder = useMemo(()=>{
    if(error) return colors.error
    if(hasFocus) return colors.primary
    return colors.background
  },[error, colors, hasFocus])

  return (
    <View style={{flexDirection:'column', }}>
      <Text 
        style={{
          ...appFonts.SemiBold,
          fontSize:12, 
          marginBottom:10
        }}
      >{name}</Text>
     <TextInput
        onFocus={()=>setHasFocus(true)}
        onBlur={()=>setHasFocus(false)}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        selectionColor={colors.text}
        style={{
          height: 50,
          backgroundColor: colors.background,
          borderRadius: 5,
          paddingHorizontal: 15,
          color:colors.text,
          borderColor:handleBorder,
          borderWidth:1, 
          ...appFonts.SemiBold,
          fontSize:13
        }}
      />
     {!!error && (
      <Text 
        style={{
          ...appFonts.Bold,
          fontSize:10, 
          color:colors.error,
          paddingHorizontal:15,
          marginTop:10
        }}
      >{error}</Text>)} 
    </View>
  )

};

export default  Input;