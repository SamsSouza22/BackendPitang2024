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
        try {
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

            // Armazenando no JSON Server
            const response = await axios.post('http://localhost:3000/agendamentos', agendamentoData);

            return res.status(201).json("Agendamento Salvo");

        } catch (error) {
            return res.status(500).json({ error: 'Erro ao salvar agendamento' });
        }
    }

    async index(req, res) {
        try {
            const response = await axios.get('http://localhost:3000/agendamentos', {
                params: {
                    _sort: 'agendData', // Ordena por agendData
                    _order: 'asc',     // Ordem crescente
                },
            });

            return res.status(200).send(response.data);

        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar agendamentos' });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;

            console.log('Dados recebidos:', { id, status });

            const response = await axios.patch(`http://localhost:3000/agendamentos/${id}`, 
                { status: status });

            console.log('Resposta do json-server:', response.data);

            if (response.status === 200) {
                res.status(200).send("Agendamento atualizado com sucesso!");
            } else {
                res.status(response.status).send("Erro ao atualizar o agendamento");
            }
        } catch (error) {
            return res.status(500).send("Não foi possível realizar a atualização: " + error.message);
        }
    }
}