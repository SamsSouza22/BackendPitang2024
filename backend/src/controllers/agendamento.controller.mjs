import crypto from 'node:crypto'
import axios from 'axios'
import z from 'zod';

const agendSchema = z.object({
    id: z.string().optional(),
    nome: z.string(),
    nascData: z.string(),
    agendData: z.string(),
    status: z.string(),
});

export default class AgendController {
   
}