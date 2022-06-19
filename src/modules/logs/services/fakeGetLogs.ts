import { GetLogsService, GetLogsResponse } from '../contract'
import { LogFilter } from '../../../interfaces/logs'
/* import { axiosConfig } from '../../axiosConfig' */

export class FakeGetLogsServices implements GetLogsService {
  async handle (params: LogFilter): Promise<GetLogsResponse> {
    return new Promise((resolve, reject) => {
      resolve(
        {
          /* erro: {
            status: 401,
            message: 'isso é uma msng de erro'
          }, */
          status: 200,
          logList: [
            {
              id: 1,
              date: '04-09-2021',
              type: 'error',
              level: 'db',
              text: 'Sql error: 4023 - unkown primary key form table test',
              details: {
                id: 1,
                date: '04-09-2021',
                type: 'error',
                level: 'db',
                text: 'Sql error: 4023 - unkown primary key form table test'
              }
            },
            {
              id: 2,
              date: '04-09-2021',
              type: 'warning',
              level: 'interface',
              text: 'object test is missing in type value',
              details: {
                id: 2,
                date: '04-09-2021',
                type: 'warning',
                level: 'interface',
                text: 'object test is missing in type value'
              }
            },
            {
              id: 3,
              date: '04-09-2021',
              type: 'info',
              level: 'db',
              text: 'user 1 change register 1034 from table test',
              details: {
                id: 3,
                date: '04-09-2021',
                type: 'info',
                level: 'db',
                text: 'user 1 change register 1034 from table test'
              }
            }
          ]
        }
      )
    })
  }
}
