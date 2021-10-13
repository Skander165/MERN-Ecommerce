import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWYyNDRhNDA5YmY2NDVlMjJlNDA0ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDEyNzIyNywiZXhwIjoxNjM0Mzg2NDI3fQ.XHefZU63-8E-Si_dG8PlX9qFSuYjR03BdHwlOXOCVPY";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});