import { setToken } from "../auth/authStore";


const BASE_URL = "http://localhost:3001/api";

export async function login({ email, password }) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.message || "Bad credentials");
  }

  const data = await res.json(); // { token, user }
  setToken(data.token);
  return data;
}

export async function register({ email, password, name }) {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.message || "Register failed");
  }

  const data = await res.json(); // { token, user }
  setToken(data.token);
  return data;
}

export function logout() {
  setToken(null);
}
