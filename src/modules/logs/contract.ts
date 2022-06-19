import { Erro } from '../../interfaces/erros'
import { LogItem, LogFilter } from '../../interfaces/logs'

export interface GetLogsResponse {
  status: number,
  erro?: Erro,
  logList: LogItem[]
}

export interface GetLogsService {
  handle: (params: LogFilter) => Promise<GetLogsResponse>
}
