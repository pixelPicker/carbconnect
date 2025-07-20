import { Request, Response } from "express";
import z from "zod/v4";
import { ApiSession } from "../../types/apiSessionType.js";
import { catchDrizzzzzleError } from "../../util/catchError.js";
import db from "../../db/db.js";
import { carbonLogs } from "../../db/schema.js";
import { getSpecificEmissionCategory } from "../../util/emissionCategories.js";
import logger from "../../config/pino-config.js";

const schema = z.object({
  category: z.enum([
    "transport",
    "energy",
    "food",
    "waste",
    "water",
    "shopping",
    "dailyActivities",
  ]),
  quantity: z.number().min(0),
});

export const addLog = async (req: Request, res: Response) => {
  const user = res.locals.user as ApiSession["user"];

  const result = schema.safeParse(req.body);

  if (!result.success) {
    const formattedError = result.error.message;
    res.status(400).json({ error: formattedError });
    return;
  }

  const factor = await getSpecificEmissionCategory(result.data.category);

  if (!factor) {
    res.status(400).json({ error: "Invalid emission category specified" });
    return;
  }

  const [addLogError, addedLog] = await catchDrizzzzzleError(
    db
      .insert(carbonLogs)
      .values({
        userId: user.id,
        category: result.data.category,
        quantity: result.data.quantity,
        emissionFactor: factor,
      })
      .returning()
  );
  if (addLogError || !addedLog) {
    logger.error("Error while adding log", {
      errorMessage: addLogError?.message,
      log: addedLog,
    });
    res.status(500).json({ error: "Failed to create log. Please try again" });
    return;
  }
  res.status(201).json({ log: addedLog[0] });
  return;
};
