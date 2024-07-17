import crypto from 'node:crypto'
import axios from 'axios'
import z from 'zod';

const agendSchema = z.object({
    id: z.string().optional(),
    nome: z.string().min(1),
    nascData: z.string(),
    agendData: z.string(),
    status: z.string(),
});

export default class AgendController {
    async store(req, res) {
            const agendamento = req.body;
            const { success, data, error } = agendSchema.safeParse({
                nome: agendamento.nome,
                nascData: agendamento.nascData,
                agendData: agendamento.agendData,
                status: agendamento.status,
            });

            if (!success) {
                return res.status(400).send(error);
            }
            // Tratamento de datas
            const formattedNascData = agendamento.nascData.split("T")[0];
            const novoAgendData = new Date(data.agendData);
            novoAgendData.setHours(novoAgendData.getHours() - 3);

            const adjustedAgendData = novoAgendData.toISOString();

            // Criando id único aleatório
            const [id] = crypto.randomUUID().split('-');

            const agendamentoData = {
                id: id,
                nascData: formattedNascData,
                agendData: adjustedAgendData,
                status: agendamento.status,
            };
    }
}