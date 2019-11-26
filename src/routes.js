import { Router } from 'express'

import SessionController from '../app/controllers/SessionController'
import IndexController from '../app/controllers/IndexController'

const routes = new Router()

routes.post('/sessions', SessionController.store)

routes.get('/', IndexController.index)

export default routes
