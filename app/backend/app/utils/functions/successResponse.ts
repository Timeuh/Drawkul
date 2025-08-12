import { HTTP_OK } from "#utils/constants/api";
import { ApiResponse } from "#utils/types/api";

/**
 * Response returned when the operation is a success
 * 
 * @param data : the entry
 * @param message : the message fitting the operation
 */
export const successResponse = <T>(data: T, message: string): ApiResponse<T> => {
  return {
    code: HTTP_OK,
    data,
    message
  };
};
