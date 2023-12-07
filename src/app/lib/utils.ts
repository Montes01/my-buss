import { BaseApiUrl } from "./Constants";

export const fetchLogin = async (id: string, password: string) => {
  const response = await fetch(`${BaseApiUrl}Autorizar/Usuario`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Documento: id, contraseña: password }),
  });
  const data = await response.json();
  return data;
};
