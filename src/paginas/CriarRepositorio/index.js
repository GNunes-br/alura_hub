import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';

import estilos from './estilos';

import { salvar as salvarRepo } from '../../servicos/requisicoes/repositorios';

export default function CriarRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');

    async function criar(){
        const resultado = await salvarRepo(route.params.id, nome, data);

        if(resultado === 'sucesso'){
            Alert.alert('Repositório salvo!');
            navigation.goBack();
        } else {
            Alert.alert('Erro ao salva repositório!');
        }
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={(text) => setNome(text)}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={(text) => setData(text)}
            />
            <TouchableOpacity style={estilos.botao} onPress={criar}>
                <Text style={estilos.textoBotao}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
