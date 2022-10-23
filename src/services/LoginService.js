import httpClient from "../utils/httpClient";

export const validateDocument = async (validateDocumentDto) => {
  const data = await httpClient
    .post(`/auth/validate-document`, validateDocumentDto)
    .then((v) => v.data);
  return data;
};

export const login = async (loginDto) => {
  const data = await httpClient
    .post(`/auth/login`, loginDto)
    .then((v) => v.data);
  return data;
};

export const palmarPrintLogin = async (file) => {
  let formData = new FormData();
  formData.append("image", file);
  const _id = localStorage.getItem("client-id-BBVA");
  const data = await httpClient
    .post(`/auth/palm-print-login?_id=${_id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((v) => v.data);
  return data;
};
