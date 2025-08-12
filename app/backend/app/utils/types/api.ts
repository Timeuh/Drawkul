/**
 *  API RELATED TYPES
 */

// api response object
export type ApiResponse<T> = {
  code: number;
  message: string;
  data: T;
}

// api response object for errors
export type ApiError = {
  error: {
    code: number;
    message: string;
    details: unknown;
  };
};