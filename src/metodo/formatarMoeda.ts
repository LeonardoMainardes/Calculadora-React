export const formatarMoeda = (valor: number) => {
    let valorFormatado = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })
  
    return valorFormatado
  }