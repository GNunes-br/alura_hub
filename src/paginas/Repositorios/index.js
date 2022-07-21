import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import estilos from './estilos';

import { buscarPorUsuario, buscarPorNome } from '../../servicos/requisicoes/repositorios';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const [nomeRepo, setNomeRepo] = useState('');
    const estaNaTela = useIsFocused();

    useEffect(async () => {
        const resultado = await buscarPorUsuario(route.params.id);
        setRepo(resultado);
    }, [estaNaTela])

    async function busca(){
        let resultado;

        if(nomeRepo){
            resultado = await buscarPorNome(nomeRepo);
        } else {
            resultado = await buscarPorUsuario(route.params.id);
        }
        setRepo(resultado);
    }

    return (
        <View style={estilos.container}>

                <View style={{
                    flexDirection: 'row',
                    width: '90%',
                    marginTop: 20,
                }}>
                    <TextInput
                        placeholder="Busque por um repositório"
                        autoCapitalize="none"
                        style={estilos.entrada}
                        value={nomeRepo}
                        onChangeText={(text) => setNomeRepo(text)}
                    />

                    <TouchableOpacity 
                    style={estilos.botaoBusca}
                    onPress={busca}
                    >
                        <Text style={estilos.textoBotao}>
                            Buscar
                        </Text>
                    </TouchableOpacity>
                </View>


                <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
                <TouchableOpacity 
                    style={estilos.botao}
                    onPress={() => navigation.navigate('CriarRepositorio', { id: route.params.id })}
                >
                    <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
                </TouchableOpacity>

                <FlatList 
                data={repo}
                style={{ width: '100%' }}
                keyExtractor={repo => repo.id}
                renderItem={({item}) => (
                    <TouchableOpacity 
                    style={estilos.repositorio}
                    onPress={() => navigation.navigate('InfoRepositorio', item)}
                    >
                        <Text style={estilos.repositorioNome}>{item?.name}</Text>
                        <Text style={estilos.repositorioData}>{item?.data}</Text>
                    </TouchableOpacity>
                )}
                />
        </View>
    );
}
