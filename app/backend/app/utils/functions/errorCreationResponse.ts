import { ApiErrorResponse } from "#utils/types/api";

/**
 * Response returned when error in creating a new entry in database
 *
 * @param message : the error message
 */
export const errorCreationResponse = (message: string): ApiErrorResponse => {
  return {
    status: 'error',
    message: message
  };
};
