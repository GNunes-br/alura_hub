import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';

import estilos from './estilos';

import { atualizar, deletar as deletarRepo } from '../../servicos/requisicoes/repositorios'

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.name);
    const [data, setData] = useState(route.params.data);

    async function salvar(){
        const resultado = await atualizar(route.params.postId, nome, data, route.params.id );

        if(resultado === 'sucesso'){
            Alert.alert('Repositório atualizado');
            navigation.goBack();
        } else {
            Alert.alert('Erro ao atualizar repositório');
        }
    }

    async function deletar(){
        const resultado = await deletarRepo(route.params.id);

        if(resultado === 'sucesso'){
            Alert.alert('Repositório deletado');
            navigation.goBack();
        } else {
            Alert.alert('Erro ao deletar repositório');
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
            <TouchableOpacity 
                style={estilos.botao}
                onPress={salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]} 
                onPress={deletar}
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
