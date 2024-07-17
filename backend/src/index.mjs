import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const server = express();

server.use(cors());
server.use(helmet());
server.use(morgan("combined"));
server.use(express.json());

server.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send({ message: error.message });
});

server.listen(5000, () => {
    console.log(`Estou rodando na porta 5000`);
});