import axios from "axios";
const baseURL = "https://chat-app-be-main.onrender.com";

const authInstance = axios.create({
  baseURL: baseURL,
});
const protecdInstance = axios.create({
  baseURL: baseURL,
});

protecdInstance.interceptors.request.use((config) => {
  const User = sessionStorage.getItem("User");
  if (User) {
    const authToken = JSON.parse(User).Token;
    config.headers["Authorization"] = `Bearer ${authToken}`;
  }
  return config;
});

export { authInstance, protecdInstance };
