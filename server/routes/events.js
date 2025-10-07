import express from "express";
import { getEventsByLocation } from "../controllers/events.js";

const router = express.Router();
router.get("/location/:location_id", getEventsByLocation);

export default router;
