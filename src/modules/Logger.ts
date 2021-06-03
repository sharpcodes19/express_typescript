import moment from 'moment'

type Params = {
  text: string
  date?: Date
  throw?: boolean
}

const line = (params: Params): string => `[${ moment (params.date).format (process.env.LOGGER_DATE_FORMAT as string) }] ${ params.text.trim () }`

export const log = (params: Params): void => { 
  console.log (line (params))
}

export const warning = (params: Params): void => { 
  console.warn (line (params))
}

export const error = (params: Params): void => {
  console.error (line (params))
  if (params.throw)
    throw new Error (params.text)
}