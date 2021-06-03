import Express from 'express'
import DotEnv from 'dotenv'

import { log } from './modules/Logger'

DotEnv.config ()

const app: Express.Express = Express ()
const port: number = +(process.env.PORT as string) || 5423


app.listen (port, () => log ({ 
  text: `${ process.env.NAME || 'Server' } is now listening to port ${ port }...`
}))