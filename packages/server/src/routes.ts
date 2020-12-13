import { Router } from 'express';

import FoodsController from './controllers/FoodsControllers';

const routes = Router();

routes.get('/foods', FoodsController.index);
routes.post('/foods', FoodsController.create);
routes.get('/foods/:id', FoodsController.show);
routes.put('/foods/:id', FoodsController.update);
routes.delete('/foods/:id', FoodsController.delete);

export default routes;