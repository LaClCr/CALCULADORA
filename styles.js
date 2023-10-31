import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 80,
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textoMostradoContainer: {
        marginTop: 5,
        alignItems: 'center',
    },
    textoMostrado: {
        flexDirection: 'row',
        marginBottom: 10,
        height: 70,
        width: 340,
        borderRadius: 4,
        borderWidth: 1,
        justifyContent: 'flex-end',
        paddingRight: 10,
    },
    textoMostradoText: {
        fontSize: 50,
        textAlign: 'right',
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        flexWrap: 'wrap',
    },
    button: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        width: 80,
        height: 80,
        marginRight: 5,
        marginLeft: 5,
    },
});