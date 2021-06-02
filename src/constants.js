export const API_ROOT = 'http://localhost:8081'

export const login = (username, password) => {
  return fetch(`${API_ROOT}/login`, {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const signup = (username, password) => {
  return fetch(`${API_ROOT}/signup`, {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
