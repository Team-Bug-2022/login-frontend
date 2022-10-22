import httpClient from "../utils/httpClient";

export const validateDocument = async(validateDocumentDto) => {
  const data = await httpClient
  .post(`/validateDocument`, validateDocumentDto)
  .then((v) => v.data);
return data;
}

export const login = async (loginDto) => {
  const data = await httpClient
    .post(`/login`, loginDto)
    .then((v) => v.data);
  return data;
};

export const palmprintLogin = async (loginDto) => {
  const data = await httpClient
    .post(`/palmprintLogin`, loginDto)
    .then((v) => v.data);
  return data;
};