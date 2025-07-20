import { Request, Response } from "express";
import { catchDrizzzzzleError } from "../../util/catchError.js";
import { ApiSession } from "../../types/apiSessionType.js";
import { carbonLogs } from "../../db/schema.js";
import { and, eq } from "drizzle-orm";
import db from "../../db/db.js";
import logger from "../../config/pino-config.js";
import z from "zod/v4";

export const deleteLog = async (req: Request, res: Response) => {
  const user = res.locals.user as ApiSession["user"];
  const logId = parseInt(req.params.logId);

  if (isNaN(logId)) {
    res.status(500).json({ error: "Invalid id provided" });
  }

  const [deleteLogError, deletedLogs] = await catchDrizzzzzleError(
    db
      .delete(carbonLogs)
      .where(and(eq(carbonLogs.userId, user.id), eq(carbonLogs.id, logId)))
  );

  if (deleteLogError || !deletedLogs) {
    logger.error("Error while deleting log", {
      errorMessage: deleteLogError?.message,
      log: deletedLogs,
    });
    res.status(500).json({ error: "Failed to delete logs. Please try again" });
    return;
  }

  res.status(200).json({ log: deletedLogs });
  return;
};

export const deleteAllLogs = async (req: Request, res: Response) => {
  const user = res.locals.user as ApiSession["user"];

  const [deleteLogError, deletedLogs] = await catchDrizzzzzleError(
    db.delete(carbonLogs).where(eq(carbonLogs.userId, user.id))
  );

  if (deleteLogError || !deletedLogs) {
    logger.error("Error while deleting log", {
      errorMessage: deleteLogError?.message,
      log: deletedLogs,
    });
    res.status(500).json({ error: "Failed to delete logs. Please try again" });
    return;
  }

  res.status(200).json({ log: deletedLogs });
  return;
};
