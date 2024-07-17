import { Router } from 'express';
import AgendController from '../controllers/agendamento.controller.mjs';

const routes = Router();
const agendController = new AgendController();

routes.get('/api/agendamentos', (req, res) => {
    angendController.index(req, res);
});

routes.post('/api/agendamentos', (req, res) => {
    agendController.store(req, res);
});

routes.patch('/api/agendamentos/:id', (req, res) => {
    agendController.update(req, res);
});

export default routes;