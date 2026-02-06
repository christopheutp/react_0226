const KEY = "accessToken";

export function setToken(token) {
  if (token) localStorage.setItem(KEY, token);
  else localStorage.removeItem(KEY);
}

export function getToken() {
  return localStorage.getItem(KEY);
}

export function isAuthenticated() {
  return !!getToken();
}

export function getAuthHeader() {
  const t = getToken();
  return t ? { Authorization: `Bearer ${t}` } : {};
}
