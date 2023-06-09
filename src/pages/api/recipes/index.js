import { pool } from "../../../../config/database";

export default async function handler(req, res) {
  const { id_recipe, recipe_detail, recipe_name, id_user } = req.body;

  switch (req.method) {
    case "POST":
      await pool.query("INSERT INTO recipes VALUES (0,?,?,?)", [
        recipe_name,
        recipe_detail,
        id_user,
      ]);
      return res.status(200).json({ secess: "Todo ok" });
    
  }
}
