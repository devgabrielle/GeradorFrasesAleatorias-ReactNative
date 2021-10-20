import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function BiscoitoDaSorte() {

    const [textoFrase, setTextoFrase] = useState('')

    const frases = [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento.',
        'O riso é a menor distância entre duas pessoas.',
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'

    ];

    function quebraBiscoito() {
        const item = frases[Math.floor(Math.random() * frases.length
        )];

        console.log(item);

        if (!item.cancelled) {
            setTextoFrase(item);
        }
    };


    return (
        <View style={styles.container}>

            <Image
                style={styles.img}
                source={require('../../src/images/biscoito.png')
                }
            />

            <Text style={styles.textoFrase}>{textoFrase}</Text>

            <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
                <Text style={styles.btnTexto}> Quebrar Biscoito </Text>
            </TouchableOpacity>

        </View>
    )
}
