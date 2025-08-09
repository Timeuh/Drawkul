import { ApiResponse } from "#utils/types/api";

/**
 * Response returned when successfully creating a new entry in database
 * 
 * @param data : the new entry
 * @param resourceName : the name of the resource type
 */
export const successfulCreationResponse = <T>(data: T, resourceName: string): ApiResponse<T> => {
  return {
    status: 'success',
    data: data,
    message: `${resourceName} created successfully`
  };
};
