import { FakeGetLogsServices } from '../services/fakeGetLogs'
import { GetLogs } from '../useCases/getLogs'

export function MakeGetLogService () {
  const getLogService = new FakeGetLogsServices()
  return new GetLogs(getLogService)
}
