import { GetLogsService, GetLogsResponse } from '../contract'
import { UseCase } from '../../_contracts'
import { LogFilter } from '../../../interfaces/logs'

export class GetLogs implements UseCase<GetLogsResponse> {
  private readonly getLogsService: GetLogsService

  constructor (getLogsService: GetLogsService) {
    this.getLogsService = getLogsService
  }

  async execute (params: LogFilter) {
    const lista = await this.getLogsService.handle(params)
    return lista
  }
}
