import { formatarMoeda } from './formatarMoeda'

export const calculo = (alcool: number, gasolina: number) => {
  const calculo = alcool / gasolina

  if (calculo <= 0.75) {
    return {
      title: "Compensa usar Álcool",
      gasolina: formatarMoeda(gasolina),
      alcool: formatarMoeda(alcool),
    }
  } else {
    return {
      title: "Compensa usar Gasolina",
      gasolina: formatarMoeda(gasolina),
      alcool: formatarMoeda(alcool),
    }
  }
}

