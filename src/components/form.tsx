import {useState, FormEvent} from "react";
import logoSvg from './assets/4059954_and_architecture_fuel_gas_gasoline_icon.png'
import { calculo } from "../metodo/calculo";

interface FormProps {
    onCalcular: (alcool: number, gasolina: number) => void
  }

function Form({ onCalcular }: FormProps) {
    const [alcoolInput, setAlcoolInput] = useState(0)
    const [gasolinaInput, setGasolinaInput] = useState(0)
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      onCalcular(alcoolInput, gasolinaInput)
    }

<div>
      <main className="container">
        <img 
          className="logo"
          src={logoSvg} 
          alt="Logo de calculadora de gasolina ou alcool." 
        />
        <h1 className="title">Qual melhor opção</h1>

        <form className="form" onSubmit={calculo}>
          <label>Álcool (preço por litro):</label>
          <input 
            className="input" 
            type="number"
            placeholder="4,90"
            min="1"
            step="0.01"
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />  

          <label>Gasolina (preço por litro):</label>
          <input 
            className="input" 
            type="number"
            placeholder="4,90"
            min="1"
            step="0.01"
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          /> 

          <input className="button" type="submit" value="Calcular" />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className="result">
          <h2 className="result-title">
            {info.title} 
          </h2>

          <span>Álcool {info.alcool}</span>
          <span>Gasolina {info.gasolina}</span>
        </section>
        )}

      </main>
    </div>
}

export default Form;