import { Router } from 'express'
import IndexController from './app/controllers/IndexController'
import SessionController from './app/controllers/SessionController'
import UserController from './app/controllers/UserController'
import DomainController from './app/controllers/DomainController'
import HolidayController from './app/controllers/HolidayController'
import ScheduleController from './app/controllers/ScheduleController'
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

routes.get('/domain', DomainController.index)
routes.get('/domain/:id', DomainController.show)
routes.post('/domain', DomainController.store)
routes.put('/domain/:id', DomainController.update)
routes.delete('/domain/:id', DomainController.destroy)

routes.get('/holiday', HolidayController.index)
routes.get('/holiday/:id', HolidayController.show)
routes.post('/holiday', HolidayController.store)
routes.put('/holiday/:id', HolidayController.update)
routes.delete('/holiday/:id', HolidayController.destroy)

routes.get('/schedule', ScheduleController.index)
routes.get('/schedule/:id', ScheduleController.show)
routes.post('/schedule', ScheduleController.store)
routes.put('/schedule/:id', ScheduleController.update)
routes.delete('/schedule/:id', ScheduleController.destroy)

export default routes
