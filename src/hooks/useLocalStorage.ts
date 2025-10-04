import { useState, useEffect } from "react";

interface UseLocalStorageReturn<T> {
  value: T;
  setValue: (value: T) => void;
  removeValue: () => void;
}

/**
 * Hook personalizado para gerenciar dados no localStorage
 * @param key - Chave do localStorage
 * @param initialValue - Valor inicial se não existir no localStorage
 * @returns Objeto com value, setValue e removeValue
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): UseLocalStorageReturn<T> {
  // Estado para armazenar o valor
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Erro ao ler localStorage para a chave "${key}":`, error);
      return initialValue;
    }
  });

  // Função para atualizar o valor
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(
        `Erro ao salvar no localStorage para a chave "${key}":`,
        error
      );
    }
  };

  // Função para remover o valor
  const removeValue = () => {
    try {
      setStoredValue(initialValue);
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(
        `Erro ao remover do localStorage para a chave "${key}":`,
        error
      );
    }
  };

  // Listener para mudanças no localStorage de outras abas
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.error(
            `Erro ao sincronizar localStorage para a chave "${key}":`,
            error
          );
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  return {
    value: storedValue,
    setValue,
    removeValue,
  };
}
