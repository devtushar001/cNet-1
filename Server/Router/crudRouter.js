import express from 'express';
import { crudAddController, deleteUser, fetchAllUsers, updateUser } from '../Controller/crudContrller.js';

const crudRouter = express.Router();

crudRouter.post('/add-user', crudAddController)
crudRouter.get('/fetch-user', fetchAllUsers)
crudRouter.post('/delete', deleteUser)
crudRouter.post('/update-user', updateUser)

export default crudRouter;