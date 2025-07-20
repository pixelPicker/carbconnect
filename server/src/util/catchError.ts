import { PostgresError } from "../types/errorTypes.js";

export const catchDrizzzzzleError = async function <T>(
  promise: Promise<T>
): Promise<[undefined, T] | [PostgresError]> {
  try {
    const data = await promise;
    return [undefined, data] as [undefined, T];
  } catch (error) {
    const err = error as PostgresError;
    return [err];
  }
};

export const catchError = async function <T>(
  promise: Promise<T>
): Promise<[undefined, T] | [Error]> {
  try {
    const data = await promise;
    return [undefined, data] as [undefined, T];
  } catch (error) {
    const err = error as Error;
    return [err];
  }
};
