import express from 'express';

import AdminController from '../controllers/admin.controller';

const AdminRouter = express.Router();

AdminRouter.get('/', AdminController.index);

module.exports = AdminRouter;