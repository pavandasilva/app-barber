export interface AppErrorData {
  type?: 'auth' | 'api' | 'validate'
  message: string
  data?: any
  detail?: string
}

export class AppError extends Error implements AppError {
  type?: string
  detail?: string
  data?: any

  constructor (errorData: AppErrorData) {
    const { type, message, data, detail } = errorData
    super()
    this.type = type
    this.message = message
    this.data = data
    this.detail = detail
  }
}
