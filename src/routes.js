import { Router } from 'express'
import IndexController from './app/controllers/IndexController'
import SessionController from './app/controllers/SessionController'
import UserController from './app/controllers/UserController'
import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.get('/', IndexController.index)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.get('/user', UserController.index)
routes.get('/user/:id', UserController.show)
routes.post('/user', UserController.store)
routes.put('/user/:id', UserController.update)
routes.delete('/user/:id', UserController.destroy)

export default routes
