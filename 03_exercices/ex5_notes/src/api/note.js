import { getAuthHeader } from "../auth/authStore";


const BASE_URL = "http://localhost:3001/api";


export async function listNotes() {
  const res = await fetch(`${BASE_URL}/notes`, {
    headers: { ...getAuthHeader() },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function getNote(id) {
  const res = await fetch(`${BASE_URL}/notes/${id}`, {
    headers: { ...getAuthHeader() },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function createNote(payload) {
  const res = await fetch(`${BASE_URL}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getAuthHeader() },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function updateNote(id, payload) {
  const res = await fetch(`${BASE_URL}/notes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...getAuthHeader() },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function deleteNote(id) {
  const res = await fetch(`${BASE_URL}/notes/${id}`, {
    method: "DELETE",
    headers: { ...getAuthHeader() },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return true;
}
