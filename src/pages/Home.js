import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){
        
            let [anoAtual, setAtual] = useState();
            let [anoNasci, setNasci] = useState();
            let [total, setTotal] = useState();

            function Calc(){
                let resultado = parseFloat(anoAtual) - parseFloat(anoNasci);
                setTotal(resultado);
            
                alert("Sua idade é " + total);
            }   

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Projeto Idade</Text>

            <TextInput onChangeText={setAtual} style={styles.campo} placeholder="Digite o ano atual"></TextInput>

            <TextInput onChangeText={setNasci} style={styles.campo} placeholder="Digite o ano de nascimento"></TextInput>

            <TouchableOpacity style={styles.botao} onPress={Calc}>
                <Text style={styles.botaoTexto}> Calcular </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 40
    },

    campo:{
        backgroundColor: '#003',
        color: '#FFF',
        fontSize: 18,
        padding: 8,
        marginTop: 10,
        width: 300,
        borderRadius: 10
    },

    botao:{
        backgroundColor: '#003',
        alignItems: 'center',
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
        width: 250
    },

    botaoTexto:{
        color: 'red',
        fontSize: 17,
        fontWeight: 700,
    }
});
