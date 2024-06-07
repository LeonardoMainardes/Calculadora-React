import { useState , FormEvent} from 'react'
import './App.css'
import logoSvg from './assets/4059954_and_architecture_fuel_gas_gasoline_icon.png'
import Form from './components/form'
import Result from './components/result'
import {calculo} from './metodo/calculo'

interface InfoProps {
  title: string;
  gasolina: string;
  alcool: string;
}

function App() {
  const [info, setInfo] = useState<InfoProps>()

  const handleCalcular = (alcool: number, gasolina: number) => {
    const resultado = calculo(alcool, gasolina)
    setInfo(resultado)
  }

  return (
    <div>
      <main className="container">
        <img
          className="logo"
          src={logoSvg}
          alt="Logo de calculadora de gasolina ou alcool."
        />
        <h1 className="title">Qual melhor opção</h1>

        <Form onCalcular={handleCalcular} />

        {info && Object.keys(info).length > 0 && (
          <Result info={info} />
        )}

      </main>
    </div>
  )
}

export default App