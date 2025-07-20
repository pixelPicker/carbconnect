import express from "express";
import { verifySession } from "../../middleware/verifySession.js";
import { logController } from "../../controllers/logs/export.js";

const router = express.Router();

router
  .post("/log/add", verifySession, logController.addLog)
  .delete("/log/delete/:logId", verifySession, logController.deleteLog)
  .delete("/log/deleteAll", verifySession, logController.deleteAllLogs)
  .get("/log/fetch/:logId", verifySession, logController.fetchLog)
  .get("/log/fetchAll", verifySession, logController.fetchAllLogs);

export default router;
