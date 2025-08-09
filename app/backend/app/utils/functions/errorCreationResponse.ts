import { ApiErrorResponse } from "#utils/types/api";

/**
 * Response returned when successfully creating a new entry in database
 * 
 * @param data : the new entry
 * @param resourceName : the name of the resource type
 */
export const errorCreationResponse = (message: string): ApiErrorResponse => {
  return {
    status: 'error',
    message: message
  };
};
