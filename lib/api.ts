/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true, // para enviar cookies como tu token
  headers: {
    "Content-Type": "application/json",
  },
});

export async function apiFetch<T = any>(
  path: string,
  options?: AxiosRequestConfig,
): Promise<T> {
  try {
    const res = await apiClient({
      url: path,
      ...options,
    });
    return res.data; // axios ya devuelve el JSON en .data
  } catch (error: any) {
    if (error.response) {
      console.log("api fetch error:", error);
      throw new Error(
        `${error.response.data.message || error.response.statusText}`,
      );
    }
    throw new Error(error.message || "Unknown API error");
  }
}
