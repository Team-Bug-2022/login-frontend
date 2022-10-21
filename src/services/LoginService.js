import httpClient from "../utils/httpClient";

export const login = async (loginDto) => {
  const data = await httpClient
    .post(`/login`, loginDto)
    .then((v) => v.data);
  return data;
};
