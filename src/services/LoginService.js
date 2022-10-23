import httpClient from "../utils/httpClient";

export const validateDocument = async(validateDocumentDto) => {
  const data = await httpClient
  .post(`/auth/validate-document`, validateDocumentDto)
  .then((v) => v.data);
return data;
}

export const login = async (loginDto) => {
  const data = await httpClient
    .post(`/auth/login`, loginDto)
    .then((v) => v.data);
  return data;
};

export const palmprintLogin = async (loginDto) => {
  const data = await httpClient
    .post(`/auth/palmprintLogin`, loginDto)
    .then((v) => v.data);
  return data;
};