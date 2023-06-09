import { pool } from '../../../config/database'

export default async function handler(req, res) {

    const { id_cliente } = req.query;

    switch (req.method) {
        case 'GET':
            const [result] = await pool.query('SELECT * FROM clientes WHERE id_cliente=?', [id_cliente]);
            return res.status(200).json(result);
        case 'DELETE':
            await pool.query('DELETE FROM clientes WHERE clientes.id_cliente=? ', [id_cliente]);
            return res.status(200).json({ secess: 'Todo ok' });
    }
}