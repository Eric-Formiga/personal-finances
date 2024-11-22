export const formatDate =(date:number) =>(
  new Intl.DateTimeFormat('pt-BR').format(date)
)