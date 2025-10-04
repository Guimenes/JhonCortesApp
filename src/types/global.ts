// Tipos globais da aplicação

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginationData {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T> {
  pagination: PaginationData;
}

// Tipos de eventos comuns
export type ButtonVariant = "primary" | "secondary" | "success" | "danger";
export type Size = "small" | "medium" | "large";
export type Status = "loading" | "success" | "error" | "idle";

// Utilitários de tipo
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type Nullable<T> = T | null;
export type ValueOf<T> = T[keyof T];
