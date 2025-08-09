/**
 *  API RELATED TYPES
 */

// api response object
export type ApiResponse<T> = {
  status: 'success' | 'error';
  data: T;
  message: string;
}