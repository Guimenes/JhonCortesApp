/**
 * Formata uma data para o padrão brasileiro
 * @param date - Data a ser formatada
 * @param includeTime - Se deve incluir horário
 * @returns String formatada
 */
export function formatDate(date: Date | string, includeTime = false): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  if (includeTime) {
    options.hour = "2-digit";
    options.minute = "2-digit";
  }

  return dateObj.toLocaleDateString("pt-BR", options);
}

/**
 * Formata um número como moeda brasileira
 * @param value - Valor numérico
 * @returns String formatada como moeda
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

/**
 * Valida se uma string é um email válido
 * @param email - Email a ser validado
 * @returns Boolean indicando se é válido
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Gera um ID único simples
 * @returns String com ID único
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * Debounce function para otimizar chamadas de função
 * @param func - Função a ser executada
 * @param wait - Tempo de espera em ms
 * @returns Função com debounce aplicado
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: number;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Capitaliza a primeira letra de uma string
 * @param str - String a ser capitalizada
 * @returns String com primeira letra maiúscula
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Trunca um texto para um tamanho específico
 * @param text - Texto a ser truncado
 * @param maxLength - Tamanho máximo
 * @returns Texto truncado com reticências
 */
export function truncateText(text: string, maxLength: number): string {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}
