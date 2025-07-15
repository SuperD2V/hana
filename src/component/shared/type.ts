export interface ApiResponse<T = any> {
  data: T;
  message: string;
}

export interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}
// Type for the 'pageable' object
export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface PaginatedResponse<T> {
  content: T[]; // The array of items (e.g., PaymentDetail[])
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number; // Appears redundant with pageable.pageSize, but matches JSON
  number: number; // Appears redundant with pageable.pageNumber, but matches JSON
  sort: Sort; // Appears redundant with pageable.sort, but matches JSON
  numberOfElements: number;
  first: boolean;
  empty: boolean; // Indicates if the content array is empty
}

export interface SignInResponse {
  username: string;
  accessToken: string;
  refreshToken: string;
}
