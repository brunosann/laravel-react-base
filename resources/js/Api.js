const base_url = "http://127.0.0.1:8000/api";

export const login = async (body) => {
  const response = await fetch(`${base_url}/auth/login`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });
  const responseJson = await response.json();
  return responseJson;
};
