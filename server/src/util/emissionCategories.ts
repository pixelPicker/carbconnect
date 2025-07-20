import { redis } from "../config/valkey-config.js";

type EmissionCategories =
  | "transport"
  | "energy"
  | "food"
  | "waste"
  | "water"
  | "shopping"
  | "dailyActivities";
const HASH_KEY = "emission:categories";

function isEmissionCategory(category: string) {
  return [
    "transport",
    "energy",
    "food",
    "waste",
    "water",
    "shopping",
    "dailyActivities",
  ].includes(category);
}

export const getSpecificEmissionCategory = async (category: EmissionCategories) => {
  const value = await redis.hget(HASH_KEY, category);

  if (!value) return null;

  const factor = parseFloat(value);
  return isNaN(factor) ? null : factor;
};

export const getAllEmissionCategories = async () => {
  const values = await redis.hgetall(HASH_KEY);
  return Object.fromEntries(
    Object.entries(values)
      .filter(([k, v]) => isEmissionCategory(k))
      .map(([k, v]) => [k, parseFloat(v)])
  ) as Record<EmissionCategories, number>;
};
