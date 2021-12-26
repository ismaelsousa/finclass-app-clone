import React, { useMemo, useState } from 'react';
import {TextInput,Text, View, Image, Touchable, TouchableOpacity} from 'react-native';
import { useTheme } from 'react-native-paper';
import { appFonts } from '../../styles/fonts';
import { Props } from './types';
import closeEye from './../../../assets/icons/closeEye.png'
import openEye from './../../../assets/icons/openEye.png'

const  Input = ({error, name,  placeholder, securityTextEntry}:Props) => {
  const {colors} = useTheme()
  const [hasFocus, setHasFocus] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

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
      <View style={{justifyContent:'center'}}>
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
            borderColor:handleBorder,
            borderWidth:1, 
            ...appFonts.SemiBold,
            fontSize:13,
            color: colors.text,
          }}
          secureTextEntry={securityTextEntry && showPassword}
        />
        {securityTextEntry && (
          <TouchableOpacity style={{
            position: 'absolute',
            right: 20,
          }} onPress={()=>setShowPassword(old=>!old)}>
            <Image style={{
              width: 20,
              height: 20,
              tintColor: colors.placeholder
            }} source={showPassword? openEye:closeEye} />
          </TouchableOpacity>
        )}
      </View>
     
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