import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [textoMostrado, setTextoMostrado] = useState('0');
  const [numActual, setNumActual] = useState('');
  const [numAnterior, setNumAnterior] = useState('');
  const [operador, setOperador] = useState(null);
  const botonesOrden = [
    'sin',
    'cos',
    'tan',
    'deg',
    'ln',
    'log',
    'π',
    'rad',
    '1/X',
    '!',
    '√',
    '/',
    7,
    8,
    9,
    'x',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    'C',
    0,
    '.',
    '=',
  ];

  function handlePress(esteBoton) {
    switch (esteBoton) {
      case 'C':
        setTextoMostrado('0');
        setNumActual('');
        setNumAnterior('');
        setOperador(null);
        break;
      case '=':
        if (numAnterior !== '' && numActual !== '') {
          calculaResultado();
        }
        break;
      case '+':
      case '-':
      case 'x':
      case '/':
        if (numActual !== '') {
          if (numAnterior !== '') calculaResultado();
          setOperador(esteBoton);
          setNumAnterior(numActual);
          setNumActual('');
        } else if (numAnterior !== '') {
          setOperador(esteBoton);
        }
        break;
      case '!':
        if (numActual !== '') {
          const num = parseFloat(numActual);
          let result = 1;
          for (let i = 1; i <= num; i++) {
            result *= i;
          }
          setTextoMostrado(result.toString().slice(0, 11));
          setNumActual(result.toString());
        }
        break;
      case '1/X':
        if (numActual !== '' && parseFloat(numActual) !== 0) {
          const result = 1 / parseFloat(numActual);
          setTextoMostrado(result.toString().slice(0, 11));
          setNumActual(result.toString());
        }
        break;
      case '√':
        if (numActual !== '' && parseFloat(numActual) >= 0) {
          const result = Math.sqrt(parseFloat(numActual));
          setTextoMostrado(result.toString().slice(0, 11));
          setNumActual(result.toString());
        }
        break;
      case 'ln':
        if (numActual !== '' && parseFloat(numActual) > 0) {
          const result = Math.log(parseFloat(numActual));
          setTextoMostrado(result.toString().slice(0, 11));
          setNumActual(result.toString());
        }
        break;
      case 'log':
        if (numActual !== '' && parseFloat(numActual) > 0) {
          const result = Math.log10(parseFloat(numActual));
          setTextoMostrado(result.toString().slice(0, 11));
          setNumActual(result.toString());
        }
        break;
      case 'π':
        setTextoMostrado(Math.PI.toString().slice(0, 11));
        setNumActual(Math.PI.toString());
        break;
      case 'rad':
        if (numActual !== '' && parseFloat(numActual) !== 0) {
          const result = (parseFloat(numActual) * Math.PI) / 180;
          setTextoMostrado(result.toString().slice(0, 11));
          setNumActual(result.toString());
        }
        break;
      case 'sin':
        if (numActual !== '') {
          const result = Math.sin(parseFloat(numActual));
          setTextoMostrado(result.toString().slice(0, 11));
          setNumActual(result.toString());
        }
        break;
      case 'cos':
        if (numActual !== '') {
          const result = Math.cos(parseFloat(numActual));
          setTextoMostrado(result.toString().slice(0, 11));
          setNumActual(result.toString());
        }
        break;
      case 'tan':
        if (numActual !== '') {
          const result = Math.tan(parseFloat(numActual));
          setTextoMostrado(result.toString().slice(0, 11));
          setNumActual(result.toString());
        }
        break;
      case 'deg':
        if (numActual !== '') {
          const result = (parseFloat(numActual) * 180) / Math.PI;
          setTextoMostrado(result.toString().slice(0, 11));
          setNumActual(result.toString());
        }
        break;
      default:
        handleNumeroPress(esteBoton);
        break;
    }
  }

  function handleNumeroPress(num) {
    if (textoMostrado === '0' || textoMostrado === operador) {
      setNumActual(num.toString());
      setOperador(null);
    } else {
      setNumActual(numActual + num.toString());
    }
    setTextoMostrado(numActual + num.toString());
  }

  function calculaResultado() {
    if (numActual === '') {
      return;
    }

    let n1 = parseFloat(numAnterior);
    const n2 = parseFloat(numActual);

    switch (operador) {
      case '+':
        n1 += n2;
        break;
      case '-':
        n1 -= n2;
        break;
      case 'x':
        n1 *= n2;
        break;
      case '/':
        if (n2 !== 0) {
          n1 /= n2;
        } else {
          setTextoMostrado('Error: División por cero');
          return;
        }
        break;
      default:
        break;
    }

    setTextoMostrado(n1.toString().slice(0, 11));
    setNumActual(n1.toString());
    setNumAnterior('');
    setOperador(null);
  }

  function crearBoton(texto) {
    let colorBotonesOp = '#26874f';
    return (
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: !isNaN(texto) ? '#bce0c0' : colorBotonesOp },
        ]}
        onPress={() => handlePress(texto)}>
        <Text>{texto}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <View style={styles.textoMostradoContainer}>
        <View style={styles.textoMostrado}>
          <Text style={styles.textoMostradoText}>{textoMostrado}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {botonesOrden.map((func, index) => {
            if (index % 4 === 0) {
              return (
                <View key={index} style={styles.buttonContainer}>
                  {crearBoton(func, handlePress)}
                </View>
              );
            } else {
              return crearBoton(func, handlePress);
            }
          })}
        </View>
      </View>
    </View>
  );
}
