import { InfoProps } from '../App'

function Result({ info }: { info: InfoProps }) {
  return (
    <section className="result">
      <h2 className="result-title">
        {info.title}
      </h2>

      <span>Álcool {info.alcool}</span>
      <span>Gasolina {info.gasolina}</span>
    </section>
  )
}

export default Result