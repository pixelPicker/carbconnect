import { Request, Response } from "express";
import { ApiSession } from "../../types/apiSessionType.js";
import { z } from "zod/v4";
import { catchDrizzzzzleError } from "../../util/catchError.js";
import db from "../../db/db.js";
import { carbonLogs } from "../../db/schema.js";
import { and, eq } from "drizzle-orm";
import logger from "../../config/pino-config.js";

export const fetchLog = async (req: Request, res: Response) => {
  const user = res.locals.user as ApiSession["user"];

  const logId = parseInt(req.params.logId);

  if (isNaN(logId)) {
    res.status(500).json({ error: "Invalid id provided" });
  }

  const [fetchLogError, fetchedLog] = await catchDrizzzzzleError(
    db
      .select()
      .from(carbonLogs)
      .where(
        and(
          eq(carbonLogs.userId, user.id),
          eq(carbonLogs.id, logId)
        )
      )
  );
  if (fetchLogError || !fetchedLog) {
    logger.error("error while fetching log", {
      errorMessage: fetchLogError?.message,
      log: fetchedLog,
    });
    res.status(500).json({ error: "Failed to fetch log. Please try again" });
    return;
  }

  res.status(200).json({ log: fetchedLog[0] });
  return;
};

export const fetchAllLogs = async (req: Request, res: Response) => {
  const user = res.locals.user as ApiSession["user"];

  const [fetchLogError, fetchedLogs] = await catchDrizzzzzleError(
    db.select().from(carbonLogs).where(eq(carbonLogs.userId, user.id))
  );
  if (fetchLogError || !fetchedLogs) {
    logger.error("Error while fetching log", {
      errorMessage: fetchLogError?.message,
      log: fetchedLogs,
    });
    res.status(500).json({ error: "Failed to fetch logs. Please try again" });
    return;
  }

  res.status(200).json({ log: fetchedLogs });
  return;
};
