/**
 *  API RELATED TYPES
 */

// api response object
export type ApiResponse<T> = {
  status: 'success';
  data: T;
  message: string;
}

// api response object for errors
export type ApiErrorResponse = {
  status: 'error';
  message: string;
}