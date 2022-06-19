export type LogItem = {
  id: number,
  level: string,
  type: string,
  text: string,
  date: string,
  details: {
    id: number,
    level: string,
    type: string,
    text: string,
    date: string
  }
}

export type LogFilter = {
  type?: string,
  level?: string,
  startDate?: string,
  endDate?: string,
  aplication: string
}
