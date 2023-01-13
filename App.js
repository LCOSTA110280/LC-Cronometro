import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      numero:0,
      botao : 'Vai',
      ultimo:null,
    }
    this.timer = null
    this.vai=this.vai.bind(this)
    this.limpar=this.limpar.bind(this)
    
  }
  vai(){

    if(this.timer!=null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao:'Vai'})
    }else{
      this.timer = setInterval(()=>{
        this.setState({numero: this.state.numero + 0.1 })
      },100);
      this.setState({botao:'Parar'})
    }


  }

  limpar(){

    if(this.timer!=null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo:this.state.numero,
      numero: 0,
      botao:'Vai'
    })
  }

  render(){  
  return (
    <View style={styles.container}>
      <Image
      source={require('./src/cronometro.png')}
      styles={styles.cronometro}
      >  
      </Image>
      <Text style={styles.texto}>{this.state.numero.toFixed(1)}</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
              <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
              <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.areaUltimo}>
            <Text style={styles.textoCorrida}>
              {this.state.ultimo > 0 ? 'Último tempo:' + this.state.ultimo.toFixed(1):''}
              </Text>
        </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue'
  },
  texto:{
    marginTop:-160,
    color:'white',
    fontSize:65,
    fontWeight:'bold'
  },
  btnArea:{
    flexDirection:'row',
    marginTop:80,
    height:40
  },
  btn:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    height:40,
    margin:17,
    borderRadius:9
  },
  btnTexto:{
    fontSize:20,
    fontWeight:'bold',
    color:'blue'
  },
  areaUltimo:{
    marginTop:40
  },
  textoCorrida:{
    fontSize:25,
    fontStyle:'italic',
    color:'white'
  }
  
})

export default App;

