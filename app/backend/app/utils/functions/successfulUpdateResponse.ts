import { ApiResponse } from "#utils/types/api";

/**
 * Response returned when successfully updating an entry in database
 * 
 * @param data : the updated entry
 * @param resourceName : the name of the resource type
 */
export const successfulUpdateResponse = <T>(data: T, resourceName: string): ApiResponse<T> => {
  return {
    status: 'success',
    data: data,
    message: `${resourceName} updated successfully`
  };
};
