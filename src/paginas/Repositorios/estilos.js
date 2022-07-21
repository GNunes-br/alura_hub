import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    repositoriosTexto: {
        fontSize: 21,
        fontWeight: '600',
        color: '#45565F',
        marginTop: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
        textAlign: 'center',
    },
    repositorio: {
        width: '100%',
        height: 80,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    repositorioNome: {
        fontSize: 16,
        color: '#444',
        fontWeight: 'bold',
    },
    repositorioData: {
        fontSize: 14,
        color: '#999',
    },
    botao: {
        backgroundColor: '#8A07DA',
        marginTop: 20,
        marginBottom: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '90%',
    },
    botaoBusca: {
        backgroundColor: '#8A07DA',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginLeft: 8,
        width: '20%'
    },
    textoBotao: {
        fontSize: 16,
        color: '#FFF',
    },
    entrada: {
        borderWidth: 2,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        borderRadius: 8,
        height: 44,
        width: '75%',
    },
});


export default estilos;