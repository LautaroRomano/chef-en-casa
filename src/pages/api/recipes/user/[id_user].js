import { pool } from "../../../../../config/database";

export default async function handler(req, res) {
  const { id_user } = req.query;
  switch (req.method) {
    case "GET":
      const [result] = await pool.query(
        "SELECT * from recipes where id_user = ?",
        [id_user]
      );
      return res.status(200).json(result);
  }
}
