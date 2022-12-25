import { Container, Content, Linha } from './styles'
import Input from './components/Input'
import Button from './components/Button'
import { useState } from 'react'


const App = () => {
  const [numeroAtual, setNumeroAtual] = useState('0');
  const [primeiroNumero, setPrimeiroNumero] = useState('0');
  const [operacao, setOperacao] = useState('');  
  
   const limparCalculadora = () => {
    setNumeroAtual('0');
    setPrimeiroNumero('0');
    setOperacao('');
  }

  const addNumeros = (number) => {
    setNumeroAtual(prev => `${prev === '0' ? '' : prev}${number}`)
  }

const somaCalculo = () => {

    if (primeiroNumero === '0') {
      setPrimeiroNumero(String(numeroAtual));
      setNumeroAtual('0');
      setOperacao('+')
      
      

    } else {
      const soma = Number(primeiroNumero) + Number(numeroAtual);
      setNumeroAtual(String(soma))
      setOperacao('')
      

    }

    

  }

const totalOp = () => {

    if (primeiroNumero !== '0' && operacao !== '' && numeroAtual !== '0') {
      switch(operacao){
        case '+':
          somaCalculo();
          break;
          case '-':
            subtCalculo();
            break;
            case '/':
              divisaoCalculo();
            break;
            case '*':
              multipCalculo();
            break;
          default:
            break;
            
  

      }

    }

  }
  


  const divisaoCalculo = () => {

    if (primeiroNumero === '0') {
      setPrimeiroNumero(String(numeroAtual));
      setNumeroAtual('0');
      setOperacao('/')

    } else {
      const divisao = Number(primeiroNumero) / Number(numeroAtual);
      setNumeroAtual(String(divisao))
      setOperacao('')

    }

  }

  const multipCalculo = () => {

    if (primeiroNumero === '0') {
      setPrimeiroNumero(String(numeroAtual));
      setNumeroAtual('0');
      setOperacao('*')

    } else {
      const multiplicacao = Number(primeiroNumero) * Number(numeroAtual);
      setNumeroAtual(String(multiplicacao))
      setOperacao('')

    }

  }



  const subtCalculo = () => {

    if (primeiroNumero === '0') {
      setPrimeiroNumero(String(numeroAtual));
      setNumeroAtual('0');
      setOperacao('-');

    } else {
      const subtraçao = Number(primeiroNumero) - Number(numeroAtual);
      setNumeroAtual(String(subtraçao))
      setOperacao('')

    }

  }

 

  return (
    <Container >
      <Content>
        <Input value={numeroAtual} />
        <Linha>
          <Button label="1" onClick={() => addNumeros('1')} />
          <Button label="2" onClick={() => addNumeros('2')} />
          <Button label="3" onClick={() => addNumeros('3')} />
          <Button label="+" onClick={somaCalculo} />
        </Linha>
        <Linha>
          <Button label="4" onClick={() => addNumeros('4')} />
          <Button label="5" onClick={() => addNumeros('5')} />
          <Button label="6" onClick={() => addNumeros('6')} />
          <Button label="-" onClick={subtCalculo} />
        </Linha>
        <Linha>
          <Button label="7" onClick={() => addNumeros('7')} />
          <Button label="8" onClick={() => addNumeros('8')} />
          <Button label="9" onClick={() => addNumeros('9')} />
          <Button label="*" onClick={multipCalculo} />
        </Linha>
        <Linha>
          <Button label="Limpar" onClick={() => limparCalculadora('')} />
          <Button label="0" onClick={() => addNumeros('0')} />
          <Button label="/" onClick={divisaoCalculo} />
          <Button label="=" onClick={totalOp} />
        </Linha>

      </Content>
    </Container>

  );
}

export default App;
