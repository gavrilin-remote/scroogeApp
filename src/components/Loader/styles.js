import {StyleSheet, Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window');

export default styles = StyleSheet.create({
     fullContainer:{
         width,
         height,
         display:'flex',
         justifyContent:'center',
         alignItems:'center'
     }
});