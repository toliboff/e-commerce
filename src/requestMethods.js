import axios from "axios";

const BASE_URL = 'http://localhost:5000/api';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjExYTM3MWZiNzIxYWZmOGRlNzU5YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDkzMTcyNSwiZXhwIjoxNjQ1MTkwOTI1fQ.0vK1PXBJaKV_90gMY-L02rgTzWTxFP4uLbo_xgjVV-U';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});