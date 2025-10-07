import { pool } from "../config/database.js";

export const getEventsByLocation = async (req, res) => {
  try {
    const location_id = req.params.location_id;
    const results = await pool.query(
      "SELECT * FROM events WHERE location_id = $1",
      [location_id]
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
